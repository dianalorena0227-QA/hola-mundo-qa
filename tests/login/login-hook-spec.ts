import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.goto();
    });
}
)