const StyleDictionary = require('style-dictionary');

module.exports = {
  "source": [
    "src/colors.json",
    "src/typography.json",
    "src/spacing.json",
    "src/breakpoints.json",
    "src/border.json",
    "src/shadow.json",
    "src/z-index.json",
    "src/components.json",
  ],
  "platforms": {
    "css": {
      "files": [
        {
          "destination": "variables.css",
          "format": "css/variables"
        }
      ],
      "transformGroup": "css",
      "buildPath": "dist/css/"
    },
    "js": {
      "transforms": ["attribute/cti", "name/cti/camel", "color/hex"],
      "files": [
        {
          "destination": "tokens.js",
          "format": "javascript/es6"
        }
      ],
      "transformGroup": "js",
      "buildPath": "dist/js/"
    },
    "scss": {
      "files": [
        {
          "destination": "variables.scss",
          "format": "scss/variables"
        }
      ],
      "transformGroup": "scss",
      "buildPath": "dist/scss/"
    }
  }
};