import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

type MisFixtures = {
    loginPage: LoginPage
};

export const test = base.extend<MisFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto(); // Arrange
        await use(loginPage); // ← ya listo
    },
});
export { expect } from '@playwright/test'; 