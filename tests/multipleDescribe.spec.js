const { test, expect } = require('@playwright/test');

test.describe.parallel('Describe block',()=>{
   
    test('Navigate to google.com and assert title', async ({ page }) => {
        await page.goto('https://google.com')
        console.log(await page.title())
        await expect(page).toHaveTitle('Google')
    })
    
    test('Navigate to daraz.com and asser title', async ({ page }) => {
        await page.goto('https://daraz.com')
        console.log(await page.title())
        await expect(page).toHaveTitle('Home — Daraz')
    })
})
