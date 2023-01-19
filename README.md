# theme

**This repo is no longer in use and has been moved to [pulumi-hugo](https://github.com/pulumi/pulumi-hugo/tree/master/themes/default/theme)**

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
    $ make serve
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

### Generating a Preview in the pulumi-hugo Repository

When working with this repository, there are often changes to markup in the pulumi-hugo repository that are dependent on the changes being made here. You can generate a PR preview that picks up on the styling changees being worked on in this repository by running the following command in the root directory of the pulumi-hugo repository with the commit sha of the changes you want to reference.

```
go get github.com/pulumi/theme@<COMMIT_HASH>
```

This will update your go.mod file to reference the theme changes at the specified commit.

### Linting
This repo uses Prettier for code formatting, to keep styling + formatting issues aligned without the need to be reviewed in PRs.  We currently do not automatically run the formatter as a build check, but may opt to do so in the future as needed.  To see what files have formatting diffs, you can run `yarn lint` from the project root, which will list all the files with diffs.  To fix these diffs in bulk, you can run `yarn lint-fix` also from the root.

Prettier is easiest to use when you run it automatically on save in your editor - see the docs here: https://prettier.io/docs/en/editors.html.  If you set your editor to format on save, you should be staying aligned with formatting without needing to run any of the above commands.
