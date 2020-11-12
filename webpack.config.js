const path = require("path");

module.exports = {
  entry: [
    "./js/util.js",
    "./js/debounce.js",
    "./js/move.js",
    "./js/backend.js",
    "./js/data.js",
    "./js/avatar.js",
    "./js/setup.js",
    "./js/modal.js",
    "./js/stat.js",
    "./js/game.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
