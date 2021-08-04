# material-table-core

<a href="https://github.com/material-table-core/website/actions?query=workflow%3Adeployment">
        <img 
          title="deployment" 
          src="https://github.com/material-table-core/website/actions/workflows/deployment.yml/badge.svg?branch=master"
        >
</a>

# Contributing 

### this package uses `yarn` not `npm`!

### Publishing

- If your commit message starts with `deploy: ` ...
  - (notice the space after the `:`)
  - we will publish a new version of the website based upon that commit

## [How to add your own demo to this website](https://material-table-core.com/demos#how-to-add-demo)

---

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
