const {test} = require('@playwright/test');
const { use } = require('../playwright.config');

//page --> used when the browser context is empty

test('Page fixture Playwright test',async ({page})=>{

    await page.goto('https://www.daraz.pk/')
    await this.page.waitForLoadState('load');
    await this.page.locator('button[class="airship-btn airship-btn-deny"]').click();
    
})