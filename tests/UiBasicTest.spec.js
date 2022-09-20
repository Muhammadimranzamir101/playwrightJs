const {test, expect} = require('@playwright/test');
const { use } = require('../playwright.config');

//Fixture is a global variable that is available to every test case in the project.

//browser --> chrome plugins/ cookies
test('Browser fixture Playwright test',async ({browser})=>{

    const context = await browser.newContext(); //opens a browser with no cookies and context (Fresh instance of browser)
    const page = await context.newPage(); // add a tab to opened browser

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await page.locator('#username').type('muhammadimranzamir786@gmail.com')
    await page.locator('#password').type('Mobile@2')
    await expect(page.locator('//input[@id="signInBtn"]'), 'should be visibble').toBeVisible(); //Custom Expect Message
    await page.locator('//input[@id="signInBtn"]').click()
    console.log(await page.locator("[style*='block']").textContent())
    //await expect.soft(page.locator("[style*='block']")).toContainText("Imran"); //Soft Assertion
    await expect(page.locator("[style*='block']")).toContainText("Incorrect"); //Normal
    await expect(page.locator("[style*='block']")).not.toContainText("Correct"); //Negating Matchers
    
})

test.only('Login and validation',async({page})=>{

    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('//input[@id="signInBtn"]')

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

    await userName.type('rahulshettyacademy')
    await userName.fill('')
    await userName.type('rahulshettyacademy')
    await password.fill('learning')
    await signInBtn.click()
    console.log(await page.locator('app-card-list[class="row"]>app-card:nth-child(1) h4').textContent())

})

test('Polling on playwright', async ({page})=>{
    await expect.poll(async () => {
        const response = await page.request.get('https://dummyjson.com/products/1');
        const jsonBody = await response.json()
        console.log("Response",jsonBody);
        //return jsonBody.id;
        return response.status();
      }, {
        intervals: [1000, 2000, 10000],
        message: 'Try Again',
        timeout: 10000,
      }).toBe(200);
})

