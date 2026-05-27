import { test, expect } from '@playwright/test';

test('login exitoso', async ({ page }) => {
  // 1. Navegar a la página de login
  await page.goto('https://playground.calidadsinhumo.com/login');

  // 2. Completar el campo de email
  await page.fill('[data-testid="login-email"]', 'ana.garcia@ejemplo.com');

  // 3. Completar el campo de contraseña
  await page.fill('[data-testid="login-password"]', 'Segura2026!');

  // 4. Hacer clic en el botón de iniciar sesión
  await page.click('[data-testid="login-submit"]');

  // 5. Verificar el mensaje de éxito
  await expect(page.getByText('Has iniciado sesión correctamente.')).toBeVisible();
});
