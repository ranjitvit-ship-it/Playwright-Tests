import {test, expect} from '@playwright/test'
test("select and validate the radio button and checkbox", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
await page.locator('#male').check()
await expect(page.locator('#male')).toBeChecked()
await page.getByLabel("Tuesday", { exact: true }).check()
await expect(page.getByLabel("Tuesday", { exact: true })).toBeChecked()



})