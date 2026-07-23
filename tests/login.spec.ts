import { test, expect } from '@playwright/test';

test('Create Account Flow', async ({ page }) => {

  // Open page
  await page.goto('http://127.0.0.1:4003/get-started');

  // Click Create Account link
  await page.getByRole('link', { name: 'Create Account' }).click();

  // Verify navigation
  await expect(page).toHaveURL(/create-account/);

  // Fill email field
  await page.getByPlaceholder('Enter your email address')
    .fill('ranjitkumar_t+may1@preveil.com');
 const frame = page.frameLocator('iframe[title="reCAPTCHA"]');

  // Click I'm not a robot
  await frame.locator('#recaptcha-anchor').click();
  const otp = '123456';

  const otpInputs = page.locator('input');

  for (let i = 0; i < otp.length; i++) {
    await otpInputs.nth(i).fill(otp[i]);
  }
});

