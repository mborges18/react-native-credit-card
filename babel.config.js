module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "test": "./test",
        "components": "./src/components",
        "api": "./src/api",
        "hooks": "./src/hooks",
        "navigation": "./src/navigation",
        "screens": "./src/screens",
        "utils": "./src/utils",
      }
    }]
  ]
};
