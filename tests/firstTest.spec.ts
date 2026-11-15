import {test ,expect} from '@playwright/test'
test.only("First test", async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")    
await page.locator ('input#name').fill("Ranjit Kumar")
await page.locator ('input#email').fill("ranjitvit@gmail.com")
await page.locator ('input#phone').fill("1234567890")
await page.locator ('textarea#textarea').fill("ABCD EFGHIJKLMNOPQRSTUVWXYZ")
await page.locator ('input#male').click()


})