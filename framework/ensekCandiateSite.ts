import { expect, type Locator, type Page } from '@playwright/test'

export class ensekSite{
    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly gettingStartedHeader: Locator;
    readonly tocList: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedLink = page.locator('h1', { hasText: 'ENSEK Energy Corp.' });
        this.gettingStartedHeader = page.locator('a', { hasText: 'Find out more »' });
      }

      async goto()
      {
        await this.page.goto('https://ensekautomationcandidatetest.azurewebsites.net/');
      }

      async getStarted() {
        await this.getStartedLink.first().isVisible();
        await expect(this.gettingStartedHeader).toBeVisible();
      }

      async pageObjectModel() {
        await this.getStarted();
      }
}