// @ts-check
const { devices } = require('@playwright/test');

const config = {
  /* Maximum time one test can run for. */
  timeout: 90 * 1000,

  //testIgnore: '**/testDir/**',
  //testMatch: /.*\.specs\.js/,

  expect: {
    timeout: 5000 //timeout for assertion
  },

  reporter: 'html',

  workers: 20,

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
      testDir: 'testDir',
      use: {
        browserName: 'chromium',
      }
    },
    {
      name: 'chromium',
      testDir: 'tests',
      use: {
        browserName: 'chromium',
      }
    },
  ],

};

module.exports = config;
