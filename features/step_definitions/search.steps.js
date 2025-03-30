const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, getText } = require("../../lib/commands.js");

Before(async function () {
    const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
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
    function () {
        // Write code here that turns the phrase above into concrete actions
        return "pending";
    },
);

When("пользователь выбирает два места", function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});

Then("кнопка {string} становится активна", function (string) {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});

When("пользователь выбирает место", function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});

When("пользователь нажимает на кнопку {string}", function (string) {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});

Then("форма с выбором мест продолжает отображаться", function () {
    // Write code here that turns the phrase above into concrete actions
    return "pending";
});
