const {test, expect} = require('@playwright/test');

test('clientApp login', async ({page})=>{

    const id = page.locator('#userEmail')
    const pwd = page.locator('#userPassword')
    const loginBtn = page.locator('#login')
    const cardTitle = page.locator('.card-body b')

    await page.goto('https://rahulshettyacademy.com/client')

    await id.type('anshika@gmail.com')
    await pwd.fill('Iamking@000')
    await loginBtn.click()
     //await page.waitForLoadState('networkidle') // Not Working
    await page.waitForNavigation()
    const titles = await cardTitle.allTextContents()
    console.log(titles)
})