import { type Page, type Locator } from '@playwright/test';

export class LoginPage {

    //Locators - definidos UNA sola vez
    private readonly email: Locator;
    private readonly password: Locator;
    private readonly botonIngresar: Locator;
    readonly mensajeError: Locator;
    readonly mensajeCorrecto: Locator;   // ← expuesto para que el TEST lo afirme (NO hay expect acá)

    constructor(private readonly page: Page) {
        // Los locators viven acá, UNA vez. Son los mismos locators semánticos de S4.
        this.email = page.getByLabel('Email');
        this.password = page.getByLabel('Contraseña');
        this.botonIngresar = page.getByRole('button', { name: 'Iniciar sesión' });
        this.mensajeError = page.getByText('Email o contraseña incorrectos');
        this.mensajeCorrecto = page.getByText('Has iniciado sesión correctamente');
        // ⚠️ usa el texto REAL que viste en el playground (mayúsculas, tildes, puntos)
    }

    //Navegar
    async goto() {
        await this.page.goto('/login');   // navega, nada más
    }

    //Lena email, contraseña y hace clic en "Iniciar sesión"

    async login(email: string, password: string) {
        // Las 3 líneas que antes copiabas en CADA test ahora viven acá, en un solo lugar.
        await this.email.fill(email);
        await this.password.fill(password);
        await this.botonIngresar.click();
    }
}