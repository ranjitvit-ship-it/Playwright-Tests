import{test, expect} from '@playwright/test'
test('tesfile', async ({ page }) => {
  await page.goto('http://www.google.com');
});
