# Alex's Frontend Tools Monorepo

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Development
---

### bootstrap

Install **ALL** ldependencies for all sub projects

```bash
# on the root of the workspace
npx lerna bootstrap
```

### Add new package

```
npx lerna create package-name
```

### TypeScript

if you wanna start your package with `TypeScript`, you need  to:

- yarn add -W -D typescript @types/node @types/jest jest ts-node ts-jest tslint
- config `tsconfig` and `tslint` config file base on mono-repo's version:

such as 

`packages\[your-package]\tsconfig.json`

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./lib"
  },
  "include": ["./src"]
}
```

`packages\[your-package]\tslint.json`

```
{
  "extends": "../../tslint.json"
}
```

### Add new dependencies to your package

Add new dependency package to project 

```
yarn add -W lodash
yarn add -W -D @types/lodash
```

Test
---

We prefer to use `jest` as test platform. and if you wanna run all tests for all packages.

```
yarn test  # in the root of workspace

# if you wanna test individual package. just run 
yarn test # in the root of the packages
```

to support TypeScript for jest you need:

```
yarn add -W -D jest @types/jest
```
and put config file:

`packages\[your-package]\jest.config.js`

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$"
};
```

## Publish
---

If you wanna publish your changes to private NPM Registry, just run the following command:

```bash
yarn version:up
git push && git push --tags
```

Conventional Commits
---

Since we use `lerna version` with ` --conventional-commits` option to enable Conventional Commits rule.

Please read the following documentation:

https://www.conventionalcommits.org/zh/

Refs
---

- https://medium.com/@jsilvax/a-workflow-guide-for-lerna-with-yarn-workspaces-60f97481149d
- https://www.freecodecamp.org/news/how-to-set-up-a-typescript-project-67b427114884/
- https://medium.com/hy-vee-engineering/creating-a-monorepo-with-lerna-yarn-workspaces-cf163908965d
- https://hackernoon.com/4-ways-to-go-monorepo-in-2019-ea5d19fc1f08
- https://www.conventionalcommits.org/en/v1.0.0-beta.2/