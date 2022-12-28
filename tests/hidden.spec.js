const { test, expect } = require('@playwright/test');

test('Hidden/Unhidden assertion', async ({ page }) => {

    await test.step('Navigate to the page', async () => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    })

    await test.step('Assert the visibility before click', async() => {
        await expect(page.locator('#displayed-text'), 'Assert the text box is visible').toBeVisible();
    })

    await test.step('Click to Hide', async() => {
        await page.locator('#hide-textbox').click();
    })

    await test.step('Assert the visibility after click', async() => {
        await expect(page.locator('#displayed-text'), 'Assert the text box is Hidden').toBeHidden()
    })

})