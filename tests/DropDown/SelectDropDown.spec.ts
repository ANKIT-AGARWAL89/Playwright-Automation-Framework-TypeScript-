import { test, expect } from "@playwright/test";

test('Validating the single select dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const singleSelectDropDown = await page.locator('#country');

    // selecting via index (starts with 0)
    // await singleSelectDropDown.selectOption({ index: 0 });

    // selecting via value
    // singleSelectDropDown.selectOption({value:'japan'});
    // singleSelectDropDown.selectOption('japan');         // this one also correct

    // selecting via label(visible text)
    singleSelectDropDown.selectOption({label:'Canada'});

    await expect(singleSelectDropDown).toHaveValue('canada');
})

test('mutliple select dropdown', async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const multiSelectDropDown = await page.locator('#colors');

    // multi select drop down
    await multiSelectDropDown.selectOption(['red','green']);

    expect(multiSelectDropDown).toHaveValues(['red','green']);
})