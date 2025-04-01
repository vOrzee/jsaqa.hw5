const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const {
    Given,
    When,
    Then,
    Before,
    After,
    setDefaultTimeout,
} = require("cucumber");
const {
    clickElement,
    isActive,
    isVisible,
    getText,
    clickByText,
    clickElementInArray,
} = require("../../lib/commands.js");

setDefaultTimeout(30000);

Before(async function () {
    const browser = await puppeteer.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();
    this.browser = browser;
    this.page = page;
});

After(async function () {
    if (this.browser) {
        await this.browser.close();
    }
});

Given(
    "пользователь открывает сайт кинотеатра, выбирает завтрашний день и открывает первый доступный сеанс",
    async function () {
        await this.page.goto("https://qamid.tmweb.ru/client/index.php", {
            setTimeout: 10000,
        });
        await clickElement(this.page, "a:nth-child(2)"); // Выбираем завтрашний день
        return await clickElement(
            this.page,
            ".movie-seances__list li:first-child a",
        ); // Выбираем первый сеанс
    },
);

When("пользователь выбирает два места", async function () {
    const selectorNotTakenNotSelected =
        ".buying-scheme__chair_standart:not(.buying-scheme__chair_taken)";
    await clickElementInArray(this.page, selectorNotTakenNotSelected, 0);
    return await clickElementInArray(this.page, selectorNotTakenNotSelected, 1);
});

Then("кнопка {string} становится активна", async function (string) {
    const expectedState = true;
    const expectedTextButton = string;
    const actualState = await isActive(this.page, ".acceptin-button");
    const actualTextButton = await getText(this.page, ".acceptin-button");
    expect(expectedState).to.equal(actualState);
    expect(expectedTextButton).to.equal(actualTextButton);
});

When("пользователь выбирает место", async function () {
    return await clickElement(
        this.page,
        ".buying-scheme__chair_standart:not(.buying-scheme__chair_taken)",
    );
});

When("пользователь нажимает на кнопку {string}", async function (string) {
    return await clickByText(this.page, string);
});

Then("форма с выбором мест продолжает отображаться", async function () {
    const expectedState = true;
    const actualState = await isVisible(this.page, ".buying-scheme__wrapper");
    expect(expectedState).to.equal(actualState);
});
