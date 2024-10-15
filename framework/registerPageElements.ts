import { type Page } from '@playwright/test';

export class ensekRegisterPage
{
    readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

async emailField(emailAnswer)
{
   await  this.page.locator('//*[@id="Email"]').fill(emailAnswer);
}


async passwordField(passwordAnswer)
{
   await  this.page.locator('//*[@id="Password"]').fill(passwordAnswer);
}
async confirmPasswordField(confirmPasswordAnswer)
{
   await  this.page.locator('//*[@id="ConfirmPassword"]').fill(confirmPasswordAnswer);
}

async register()
{
   await  this.page.locator('/html/body/div[2]/form/div[5]/div/input').click();
}


}
