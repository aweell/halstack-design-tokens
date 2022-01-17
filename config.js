const StyleDictionary = require('style-dictionary');

module.exports = {
  "source": [
    "src/core/colors.json",
    "src/core/typography.json",
    "src/core/spacing.json",
    "src/core/breakpoints.json",
    "src/core/border.json",
    "src/core/shadow.json",
    "src/core/z-index.json",
    "src/core/size.json",
    "src/utilities/padding.json",
    "src/utilities/margin.json",
    "src/components/accordion.json",
    "src/components/alert.json",
    "src/components/box.json",
    "src/components/button.json",
    "src/components/card.json",
    "src/components/checkbox.json",
    "src/components/chip.json",
    "src/components/date.json",
    "src/components/dialog.json",
    "src/components/dropdown.json",
    "src/components/fileInput.json",
    "src/components/radio.json",
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
      "transforms": ["attribute/cti", "name/cti/camel", "color/hex8"],
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