import { LoginPage } from '../pages/login.page';
import { test, expect } from './fixtures';

const casos = [
    { nombre: 'credenciales válidas', email: 'ana.garcia@ejemplo.com', password: 'Segura2026!', esperado: 'exito' },
    { nombre: 'contraseña incorrecta', email: 'ana.garcia@ejemplo.com', password: 'dianalorena0227!', esperado: 'error_general' },
    { nombre: 'email inexistente', email: 'usuario.inexistente@ejemplo.com', password: 'Segura2026!', esperado: 'error_general' },
    { nombre: 'email formato invalido', email: 'ana.garcia', password: 'Segura2026!', esperado: 'error_general' },
    { nombre: 'email vacío', email: '', password: 'Segura2026', esperado: 'email_obligatorio' },
];

for (const caso of casos) {
    test(`login con ${caso.nombre} → ${caso.esperado}`, async ({ loginPage, page }) => {
        await loginPage.login(caso.email, caso.password);
        if (caso.esperado === 'exito') {
            await expect(loginPage.mensajeCorrecto).toBeVisible();
        } else if (caso.esperado === 'email_obligatorio') {
            await expect(loginPage.mensaje_email_obligatorio).toBeVisible();
            await expect(loginPage.mensajeCorrecto).not.toBeVisible();
            await expect(page).toHaveURL(/.*login/);
        } else {
            await expect(loginPage.mensajeError).toBeVisible();
            await expect(loginPage.mensajeCorrecto).not.toBeVisible();
            await expect(page).toHaveURL(/.*login/);
        }
    });
} 