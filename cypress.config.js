const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {},
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true
  }
});
