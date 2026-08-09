import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login', () => {
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    //con el beforeeach me ahorro de instanciar e ir a la url en todos los test
    //va solo el preparar 


    test('Login exitoso con credenciales válidas', async () => {
        await loginPage.login('ana.garcia@ejemplo.com', 'Segura2026!');
        //Verificar
        await expect(loginPage.mensajeCorrecto).toBeVisible();
    });

    test('Login fallido con credenciales incorrectas', async ({ page }) => {

        //Actuar
        await loginPage.login('ana.garcia@ejemplo.com', 'dianalorena0227!');
        //Verificar
        await expect(loginPage.mensajeError).toBeVisible();
        await expect(loginPage.mensajeCorrecto).not.toBeVisible();
        await expect(page).toHaveURL(/.*login/);

    });

    test('Login fallido con email inexistente', async ({ page }) => {

        //Actuar
        await loginPage.login('usuario.inexistente@ejemplo.com', 'Segura2026!');
        //Verificar
        await expect(loginPage.mensajeError).toBeVisible();
        await expect(loginPage.mensajeCorrecto).not.toBeVisible();
        await expect(page).toHaveURL(/.*login/);

    });
    test('Login con email de formato inválido', async ({ page }) => {

        //Actuar
        await loginPage.login('ana.garcia', 'Segura2026!');
        //Verificar
        await expect(loginPage.mensajeError).toBeVisible();
        await expect(loginPage.mensajeCorrecto).not.toBeVisible();
        await expect(page).toHaveURL(/.*login/);

    });
    test('Login con email vacío', async ({ page }) => {

        //Actuar
        await loginPage.login('', 'Segura2026!');
        //Verificar
        await expect(loginPage.mensaje_email_obligatorio).toBeVisible();
        await expect(loginPage.mensajeCorrecto).not.toBeVisible();
        await expect(page).toHaveURL(/.*login/);

    });

});
