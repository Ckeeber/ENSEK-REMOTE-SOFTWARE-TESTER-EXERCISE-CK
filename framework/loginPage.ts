import { type Page } from '@playwright/test';



export class ensekLoginPage
{
        readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async loginEmailField(emailAnswer)
    {
    await  this.page.locator('//*[@id="Email"]').fill(emailAnswer);
    }


    async loginPasswordField(passwordAnswer)
    {
    await  this.page.locator('//*[@id="Password"]').fill(passwordAnswer);
    }

}