const { test, expect } = require('@playwright/test');

test('Verify Alert', async ({ page }) => {
    await page.goto('http://autopract.com/selenium/alert5/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('This is an Alert Box.');
        await dialog.accept();
    });

    await page.click('#alert-button');

    await expect(page.locator('#msg')).toHaveText('You clicked on Ok button.')
});

test.only('Verify Confirm Dialog OK', async ({ page }) => {
    await page.goto('http://autopract.com/selenium/alert5/');
  
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Do you want to save changes?');
        await dialog.accept();
    });
        
    await page.click('#confirm-button');

    await expect(page.locator('#msg')).toHaveText( 'Data saved successfully!')
});

test('Accept Value in Prompt', async ({ page }) => {
    await page.goto('http://autopract.com/selenium/alert5/');
  
    page.on('dialog', async dialog => { 
        expect(dialog.type()).toContain('prompt');  
        expect(dialog.message()).toContain('Please enter any number');
        expect(dialog.defaultValue()).toContain('10');
        await dialog.accept('15');
    });
        
    await page.click('#prompt-button');
        
    await expect(page.locator('#msg')).toHaveText( 'You have entered number: 15')
});