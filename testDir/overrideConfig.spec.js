const { test, expect } = require('@playwright/test');


test.use({ viewport: { width: 600, height: 900 }, browserName: 'firefox', headless: true }); //Override config in test file


test('Page fixture Playwright test', async ({ page }) => {
    await page.goto('https://google.com')
    console.log(await page.title())
    await expect(page).toHaveTitle('Google')
})