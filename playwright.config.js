// @ts-check
const { devices } = require('@playwright/test');

const config = {
  /* Maximum time one test can run for. */
  timeout: 90 * 1000,

  // testIgnore: '**/testDir/**',
  // testMatch: /.*\.specs\.js/,

  expect: {
    timeout: 5000 //timeout for assertion
  },

  reporter: [['line'], ['allure-playwright']],

  workers: 20,

  use: {
    browserName : 'chromium',
    headless : false,
    viewport : null,
    trace: 'on',
    //trace: 'on-first-retry',
    retries: 1,
    //viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    launchOptions: {
      slowMo: 20,
      args: ["--start-maximized"],
      // logger:{
      // isEnabled: (name) => name === 'api',
      // log: (name, severity, message) => console.log(`${name} ${message}`)
      // }
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
    {
      name: 'firefox',
      testDir: 'tests',
      use: {
        browserName: 'firefox',
      }
    },
    {
      name: 'webkit',
      testDir: 'tests',
      use: {
        browserName: 'webkit',
      }
    },
    {
      name: 'headless',
      testDir: 'tests',
      reporter: [['line'], ['allure-playwright']],
      use: {
        browserName: 'chromium',
        headless: true,
      }
    },
    {
      name: 'headless_firefox',
      testDir: 'tests',
      reporter: [['line'], ['allure-playwright']],
      use: {
        browserName: 'firefox',
        headless: true,
      }
    },
    {
      name: 'headless_webkit',
      testDir: 'tests',
      reporter: [['line'], ['allure-playwright']],
      use: {
        browserName: 'webkit',
        headless: true,
      }
    },
  ],

};

module.exports = config;
