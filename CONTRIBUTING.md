# Contributing storybook-addons-abstract

We're very grateful for outside contributions, as they both improve the robustness of the addon and help inform how the addon is being used in real-world applications. Whether the contribution is a minor documentation fix or major feature enhancement, we're always happy to accept changes that adhere to the expectations in this document.

### Setup

Fork and clone the repository:

```sh
$ git clone https://github.com/<username>/storybook-addons-abstract
```

### Installation

Install dependencies from the project root using Yarn:

```sh
$ cd storybook-addons-abstract && yarn install
```

### Building

Transpile the `src` directory into a `dist` directory using Babel:

```sh
$ yarn build
```

### Linting

Lint and format all code using Prettier via ESLint:

```sh
$ yarn lint --fix
```

### Testing

Run unit tests using Jest:

```sh
$ yarn test
```

## Cutting releases

New package versions of `storybook-addons-abstract` are automatically published to the public NPM registry whenever new tags are pushed to the repository. This repository uses [`standard-version`](https://github.com/conventional-changelog/standard-version) as a convention to automate versioning, tagging, and changelog generation:

1. Bump the version and submit a pull request.
    ```sh
    $ yarn release
    $ git push origin <new_tag_version>
    ```
2. Once the PR lands, push the new tag to the repository.
    ```sh
    $ git push origin <new_tag_version>
    ```