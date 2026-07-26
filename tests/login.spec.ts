import { test, expect } from '@playwright/test';

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
//Preparar

test('Login fallido con credenciales incorrectas', async ({ page }) => {


    //Actuar 
    await page.goto('/login');
    await page.getByLabel('Email').fill('ana.garcia@ejemplo.com');
    await page.getByLabel('Contraseña').fill('dianalorena0227!');
    await page.getByRole('button', { name: 'Iniciar sesión' }).click();

    //Verificar

    await expect(page.getByText('Email o contraseña incorrectos')).toBeVisible();


});
