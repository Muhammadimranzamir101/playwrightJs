// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000 //timeout for assertion
  },

  reporter: 'html',

  use: {
    browserName : 'chromium',
    headless : false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    launchOptions: {
      slowMo: 20,
    },
  },

  projects: [
    {
      name: 'Directory_Chromium',
      testDir: 'configExample',
      use: {
        browserName: 'chromium',
      }
    },
    {
      name: 'chromium',
      testDir: 'tests',
      use: {
        browserName: 'webkit',
      }
    },
  ],

};

module.exports = config;
