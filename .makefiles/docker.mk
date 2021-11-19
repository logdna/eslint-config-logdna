build:: build-image
clean-all:: clean-docker
lint:: lint-docker
publish:: publish-image


# OCI Image Annotations https://github.com/opencontainers/image-spec/blob/master/annotations.md
# More support coming in The Future
# Can override any with ?= in .config.mk
OCI_SOURCE := https://github.com/answerbook/$(APP_NAME)
OCI_CREATED := $(shell date -u +'%Y-%m-%dT%H:%M:%SZ')

DOCKER_BUILD_ALWAYS_PULL ?= true
DOCKERFILE_PATH ?= .
DOCKER_IMAGE ?= us.gcr.io/logdna-k8s/$(APP_NAME)
DOCKERFILE ?= $(wildcard $(DOCKERFILE_PATH)/Dockerfile)
HADOLINT_COMMAND := $(DOCKER_RUN) -v $(shell pwd):/workdir:Z -w /workdir hadolint/hadolint:v1.8.0 hadolint --ignore SC2086

# Docker Variables
# Build out a full list of tags for the image build
DOCKER_TAGS := $(GIT_SHA1) $(RELEASE_VERSION)
ifeq ("$(GIT_BRANCH)", $(filter "$(GIT_BRANCH)", "master" "main"))
  DOCKER_TAGS := $(DOCKER_TAGS) $(MINOR_VERSION) $(MAJOR_VERSION)
  ifeq ("$(PUBLISH_LATEST)", "true")
    DOCKER_TAGS := $(DOCKER_TAGS) latest
  endif
endif
# This creates a `docker build` cli-compatible list of the tags
DOCKER_BUILD_TAGS := $(addprefix --tag $(DOCKER_IMAGE):,$(DOCKER_TAGS))

# Adjust build behaviors
ifeq ("$(DOCKER_BUILD_ALWAYS_PULL)", "true")
  DOCKER_BUILD_OPTS += --pull
endif
ifeq ("$(DOCKER_BUILD_NO_CACHE)", "true")
  DOCKER_BUILD_OPTS += --no-cache=true
endif

.PHONY:clean-docker
clean-docker:   ## Clean up docker images from current
	-docker images $(APP_NAME):$(BUILD_VERSION) --format "{{.ID}}" | xargs docker rmi -f


.PHONY:lint-docker
lint-docker: $(DOCKERFILE) ## Lint the Dockerfile for issues
ifneq (,$(DOCKERFILE))
	@# only run if DOCKERFILE isn't empty; control repos don't have one
	$(HADOLINT_COMMAND) $(DOCKERFILE)
endif

.PHONY:publish-image
publish-image:: ## Publish SemVer compliant releases to our internal docker registry
ifneq (,$(DOCKERFILE))
	@for version in $(DOCKER_TAGS); do \
		$(DOCKER) tag $(DOCKER_IMAGE):$(GIT_SHA1) $(DOCKER_IMAGE):$${version}; \
		$(DOCKER) push $(DOCKER_IMAGE):$${version}; \
	done
endif

.PHONY:build-image
build-image:: $(BUILD_ENV) ## Build a docker image as specified in the Dockerfile
ifneq (,$(DOCKERFILE))
	@# only run if DOCKERFILE isn't empty; control repos don't have one
	$(DOCKER) build . --rm -f $(DOCKERFILE) \
		$(DOCKER_BUILD_TAGS) \
		$(DOCKER_BUILD_OPTS) \
		--build-arg GITHUB_TOKEN \
		--build-arg APP_VERSION=$(APP_VERSION) \
		--build-arg BUILD_VERSION=$(BUILD_VERSION) \
		--build-arg GIT_SHA1=$(GIT_SHA1) \
		--build-arg IMAGE_TITLE="$(TITLE)" \
		--build-arg OCI_SOURCE=$(OCI_SOURCE)
endif
