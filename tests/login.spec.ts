import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';


//-------Test con POM --------

test('Login exitoso con credenciales váidas', async ({ page }) => {
    const loginPage = new LoginPage(page); //Instanciar al page Object
    //Preparar
    await loginPage.goto();
    //Actuar
    await loginPage.login('ana.garcia@ejemplo.com', 'Segura2026!');
    //Verificar
    await expect(loginPage.mensajeCorrecto).toBeVisible();

});

//-------Test con POM --------

test('Login fallido con credenciales incorrectas', async ({ page }) => {
    const loginPage = new LoginPage(page); //Instanciar al page Object
    //Preparar
    await loginPage.goto();
    //Actuar
    await loginPage.login('ana.garcia@ejemplo.com', 'dianalorena0227!');
    //Verificar
    await expect(loginPage.mensajeError).toBeVisible();
    await expect(loginPage.mensajeCorrecto).not.toBeVisible();
    await expect(page).toHaveURL(/.*login/);

});

/*Test sin el POM

//Preparar

test('Login exitoso con credenciales váidas', async ({ page }) => {


    //Actuar 
    await page.goto('/login');
    await page.getByLabel('Email').fill('ana.garcia@ejemplo.com');
    await page.getByLabel('Contraseña').fill('Segura2026!');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();

    //Verificar

    await expect(page.getByText('Has iniciado sesión correctamente')).toBeVisible();

});
*/



/*Test sin POM
//Preparar


test('Login fallido con credenciales incorrectas', async ({ page }) => {


    //Actuar 
    await page.goto('/login');
    await page.getByLabel('Email').fill('ana.garcia@ejemplo.com');
    await page.getByLabel('Contraseña').fill('dianalorena0227!');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();

    //Verificar

    await expect(page.getByText('Email o contraseña incorrectos')).toBeVisible();
    await expect(page.getByText('Has iniciado sesión correctamente')).not.toBeVisible();
    await expect(page).toHaveURL(/.*login/);
});
*/

