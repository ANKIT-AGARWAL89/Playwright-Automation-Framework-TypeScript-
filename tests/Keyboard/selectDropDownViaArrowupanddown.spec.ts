import { test, expect } from '@playwright/test';

test('selecting dropdown via keyboard up and down', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const singleSelectDropDown = page.locator('#country');

    await singleSelectDropDown.focus();

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowUp');

    await expect(singleSelectDropDown).toHaveValue('canada');
    await page.waitForTimeout(2000);
})