const {test} = require('@playwright/test');

//page --> used when the browser context is empty

test('Browser fixture Playwright test',async ({page})=>{

    const context = await browser.newContext(); 
    const page = await context.newPage(); 

    await page.goto('https://www.daraz.pk/')
    await this.page.waitForLoadState('load');
    await this.page.locator('button[class="airship-btn airship-btn-deny"]').click();
    
})