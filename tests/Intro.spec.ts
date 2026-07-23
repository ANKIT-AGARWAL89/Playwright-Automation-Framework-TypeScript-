import { test, expect } from '@playwright/test';

// test(testTitle, testFunction);

test(
    'Intro of Playwright', async ({page}) => {
      await page.goto('https://google.com')
      await expect(page).toHaveTitle('Google')
    }
);