const { test, expect } = require('@playwright/test');

test('Handle frames in playwright', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.locator('body>h1')).toContainText('Practice');
    await page.locator('text=iFrame Example').scrollIntoViewIfNeeded()

    const framePage = page.frameLocator('#courses-iframe');
    await framePage.locator('li a[href="lifetime-access"]:visible').click();
    await expect(framePage.locator('.text h2')).toContainText('Happy Subscibers')

    await expect(page.locator('input[value="radio1"]')).not.toBeChecked();
    await page.locator('input[value="radio1"]').click();
    await expect(page.locator('input[value="radio1"]')).toBeChecked();
})