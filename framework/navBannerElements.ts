import { type Page } from '@playwright/test';


export class ensekNavBar
{
    readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

/// Nav bar clickable elements. 

async homeButton()
{
    await this.page.getByText('Home').click();
}

async aboutButton()
{
    await this.page.getByText('About').nth(0).click();
}

async contactButton()
{
    await this.page.getByText('Contact').click();
}

async registerButton()
{
    await this.page.getByText('Register').click();
}
async logInButton()
{
    await this.page.getByText('Log in').click();
}

}