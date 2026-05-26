import { test, expect } from '@playwright/test';

test('Login exitoso con standard_user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verifica que aparece el texto "Products" post-login
  await expect(page.locator('.title')).toHaveText('Products');
});
