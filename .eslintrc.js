module.exports = {
    "extends": "airbnb",
    "parserOptions": {
      "ecmaVersion": 6,
      "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true,
      }
    },
    "parser": "babel-eslint",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }],
      "react/require-default-props": 0,
    },
    "env": {
      "browser": true
    }
};