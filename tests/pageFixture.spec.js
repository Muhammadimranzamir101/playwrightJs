const {test} = require('@playwright/test');
const { use } = require('../playwright.config');

//page --> used when the browser context is empty

test.skip('Page fixture Playwright test',async ({page})=>{

    await page.goto('https://www.daraz.pk/')
    await page.waitForLoadState('load');
    await page.locator('button[class="airship-btn airship-btn-deny"]').click();
    
})