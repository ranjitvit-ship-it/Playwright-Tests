import {test, expect, Locator} from '@playwright/test'

test("Verify Playwright Locators", async({page})=>{

await page.goto("https://theautomationzone.blogspot.com/2020/07/xpath-practice.html")
const logo:Locator = page.getByAltText("My photo")
await expect(logo).toBeVisible()
await expect(page.getByText("the automation zone")).toBeVisible()







})