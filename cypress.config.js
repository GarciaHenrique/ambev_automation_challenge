const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");


module.exports = defineConfig({

  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 10000,
  video: false,
  screenshotOnRunFailure: true,

  env: {
    apiUrl: "https://serverest.dev"
  },

  e2e: {
    baseUrl: "https://front.serverest.dev",
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",

    stepDefinitions: [
      "cypress/e2e/frontend/step_definitions/**/*.js",
      "cypress/e2e/api/step_definitions/**/*.js"
    ],

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});