import {test, expect} from "@playwright/test";

test('performing double click', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const doubleClickLoc = page.getByRole("button", {name:'Copy Text'});

    await doubleClickLoc.dblclick();

    await expect(page.locator('#field2')).toHaveValue('Hello World!');
})