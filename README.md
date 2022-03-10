# theme

A [Hugo module](https://gohugo.io/hugo-modules/) for managing the JavaScript and CSS code used on Pulumi websites.

## Using this module

This repo's `assets` folder contains our compiled CSS and JavaScript bundles, which we build from the source code in `src` (Sass and TypeScript) and `stencil` (web components). You can embed these CSS and JS bundles into your Hugo website directly if you like, or use the `assets` partial to make things a little easier:

```html
<html>
<head>
    {{ partial "assets" }}
    ...
</html>
```

### Use the `release` branch

When a change is merged into the `master` branch of this repo, a GitHub Actions workflow compiles new CSS and JavaScript bundles and commits them automatically to the `release` branch. As a consumer of this module, you'll therefore most likely want to depend on the `release` branch, rather than `master`, in order to be sure you're getting code that's been properly built and tested in CI. To do that, specify `release` as the revision when you install the module with [`hugo mod get`](https://gohugo.io/commands/hugo_mod_get/):

```bash
$ hugo mod get github.com/pulumi/theme@release
```

## Developing this module

1. First, make sure you're using the right version of Node.js. We recommend using [`nvm`](https://github.com/nvm-sh/nvm) and generally use Yarn (version 1) for managing Node.js dependencies:

    ```bash
    $ nvm use
    Now using node v14.17.6 (npm v6.14.15)

    $ yarn version
    yarn version v1.22.15
    ```

1. Next, install Node.js dependencies and start the development server:

    ```
    $ make ensure
    $ make start
    ```

    Once the development server is running, any changes you make to CSS, Sass, TypeScript, or [Stencil.js](https://stenciljs.com/) source code will be compiled into `assets/css` and `assets/js` bundles, respectively.

1. Submit your changes (including compiled bundles) as a PR against the `master` branch. Once your change is approved and merge, it'll be incorporated into a new asset build and made available in the `release` branch.

### Developing alongside a Hugo website

If you're working on a Hugo project that uses this module and you'd like to make changes to this module to accompany it (for example, to add a new web component, or some CSS that you'd like to reference in a Hugo layout file), you can easily point your Hugo site to this module in development by pointing to a local clone of this repo. To do so, first clone the repo, then add a `replace` line to your Hugo site's `go.mod` file to override your existing `pulumi/theme` module reference temporarily -- for example:

```
module github.com/pulumi/pulumi-hugo

go 1.16

require (
	github.com/pulumi/theme v0.0.0-20211015193555-271ef1f67093 // indirect
)

// Add this line to tell Hugo to use your local clone of pulumi/theme.
replace github.com/pulumi/theme => ../theme
```

**Tip:** If you run `make serve` (in this repo) in a terminal tab and run your Hugo dev server in another, the changes you make to CSS and JavaScript source files will be recompiled and reloaded in the browser automatically.

Be sure to remove the `replace` line before you commit.
