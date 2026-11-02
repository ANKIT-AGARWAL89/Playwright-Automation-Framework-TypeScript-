import {test, expect} from '@playwright/test';

test('Mouse Hover action', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const HoverLoc = await page.getByRole("button", {name:'Point Me'});

    await HoverLoc.hover();

    await expect(page.getByRole("link",{name:'Mobiles'})).toBeVisible();
    await expect(page.getByRole('link',{name:'Laptops'})).toBeVisible();
})