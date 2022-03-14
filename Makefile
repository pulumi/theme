.PHONY: clean
clean:
	rm -rf dist node_modules stencil/dist stencil/node_modules

.PHONY: ensure
ensure:
	yarn && yarn --cwd stencil

.PHONY: serve
serve:
	yarn start

.PHONY: build
build:
	yarn build
