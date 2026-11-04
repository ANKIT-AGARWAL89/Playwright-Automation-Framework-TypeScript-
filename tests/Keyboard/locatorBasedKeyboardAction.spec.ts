import { test, expect } from '@playwright/test';

test('locator based keyboard action', async ({ page }) => {
    await page.goto('http://vbsca.ca/login/login.asp');
    
    const userName = page.locator("xpath=//input[@name='txtUsername']");

    await userName.fill('ankit.ag@gmail.com');

    await userName.press('Control+A');

    await userName.pressSequentially('ankit.agarwal@gmail.com')
    
    const password = page.locator("xpath=//input[@name='txtPassword']");

    password.pressSequentially('icdnioc');

    const login = page.locator("xpath=//input[@value='Login']");

    await page.keyboard.press('Enter');

    await page.waitForTimeout(2000);
})