NO_COLOR=\033[0m
OK_COLOR=\033[32m

all: build

build:
	@echo "$(OK_COLOR)>>>>>>>>>>BUILDING FRONTEND CLIENT>>>>>>>>>>$(NO_COLOR)"
	@yarn build
	@docker build -t project-kut-ku-fe .

.PHONY: build
