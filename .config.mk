APP_VERSION := $(shell awk '/version/ {gsub(/[",]/,""); print $$2}' package.json | head -1)
