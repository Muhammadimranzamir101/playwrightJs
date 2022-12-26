const { test, expect, chromium } = require('@playwright/test');
const { use } = require('../playwright.config');

const caps = {
    'browser': 'chrome',  // allowed browsers are `chrome`, `edge`, `playwright-chromium`, `playwright-firefox` and `playwright-webkit`
    'os': 'osx',
    'os_version': 'ventura',
    'name': 'Playwright sample Local test',
    'build': 'playwright-build-3',
    'browserstack.local': 'true',
    'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'muhammadimran_MHX6Zj',
    'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'EB5FT2YthqRzGFbDyqXa',
    'client.playwrightVersion': '1.28.1'  // Playwright version being used on your local project needs to be passed in this capability for BrowserStack to be able to map request and responses correctly
};

test('Go to google.com and verify title on browserstack', async () => {
    const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`,
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com/');
    const title = await page.title('');
    console.log(title);
    try {
        expect(title).toContain('Google', 'Expected page title is correct!');
        // following line of code is responsible for marking the status of the test on BrowserStack as 'passed'. You can use this code in your after hook after each test
        await page.evaluate(_ => { },
            `browserstack_executor: ${JSON.stringify({
                action: 'setSessionStatus', arguments: { status: 'passed', reason: 'Page title match' }
            })}`);
    }
    catch {
        await page.evaluate(_ => { },
            `browserstack_executor: ${JSON.stringify({
                action: 'setSessionStatus', arguments: { status: 'failed', reason: 'Page title did not match' }
            })}`);
    }
    await browser.close();
})