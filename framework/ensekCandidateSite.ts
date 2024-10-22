import { expect, type Locator, type Page } from '@playwright/test'

export class ensekSite{
    readonly page: Page;
    readonly getStartedTitle: Locator;
    readonly gettingStartedButton: Locator;
    readonly tocList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedTitle = page.locator('h1', { hasText: 'ENSEK Energy Corp.' });
        this.gettingStartedButton = page.locator('a', { hasText: 'Find out more »' });
      }

      async goto()
      {
        await this.page.goto('https://ensekautomationcandidatetest.azurewebsites.net/');
      }

      async getStarted() {
        await this.getStartedTitle.first().isVisible();
        await expect(this.gettingStartedButton).toBeVisible();
      }

      async pageObjectModel() {
        await this.getStarted();
      }
}