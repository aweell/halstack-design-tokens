# halstack-design-tokens

Updated list of the halstack design tokens.

## npm package

```
npm i @aweell/halstack-design-tokens
```

## Style dictionary

The token ./dist folder files are built using [style dictionary](https://amzn.github.io/style-dictionary/#/)

To update the dist folder when changes are made run:

```
style-dictionary build
```

## Add new tokens

To add to the build process new tokens you need to add the path to the file in the config.js file located in the root of the repository:

```
module.exports = {
  "source": [
    "path/file.json",
  ],
  
  ```