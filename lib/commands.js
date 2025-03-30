module.exports = {
    clickElement: async function (page, selector) {
        try {
            await page.waitForSelector(selector);
            await page.click(selector);
        } catch {
            throw new Error(`Selector is not clickable: ${selector}`);
        }
    },
    getText: async function (page, selector) {
        try {
            await page.waitForSelector(selector);
            return await page.$eval(selector, (link) => link.textContent);
        } catch {
            throw new Error(`Text is not available for selector: ${selector}`);
        }
    },
};
