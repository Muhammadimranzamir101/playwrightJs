const { test, expect, request } = require('@playwright/test');
const loginPayload = {
    userEmail: "anshika@gmail.com",
    userPassword: "Iamking@000"
}
let token;

test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
        data: loginPayload
    })

    console.log(loginResponse)

    //200, 201
    expect(loginResponse.ok()).toBeTruthy()
    expect(loginResponse.status()).toBe(200)
    console.log(loginResponse.body)
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log("Token Generated:", token);
})

test('Client app login', async ({ page }) => {
    page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, token);
    await page.goto('https://rahulshettyacademy.com/client/')
    await page.pause()
})