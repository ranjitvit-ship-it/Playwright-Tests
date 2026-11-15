import{test,expect} from'@playwright/test'
test("fill and Valdate the form",async({page})=>{
//launch the application
await page.goto("https://practicetestautomation.com/practice-test-login/")
await page.locator('input#username').fill("student")
await expect(page.locator('input#username')).toHaveValue("student")
await page.locator('input#password').fill("Password123")
await page.locator('button#submit').click()

})