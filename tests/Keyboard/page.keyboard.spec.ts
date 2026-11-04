import { test, expect } from '@playwright/test';

test('page.keyboard type and press action', async ({ page }) => {
    await page.goto('http://vbsca.ca/login/login.asp');
    
    await page.locator("xpath=//input[@name='txtUsername']").click();
    
    await page.keyboard.type('ankit.ag@gmail.com');
    
    await page.locator("xpath=//input[@name='txtPassword']").click();
    
    await page.keyboard.type('sdndevjj');
    
    await page.keyboard.press('Enter');
    
})