const {Given, When, Then} = require("@cucumber/cucumber");
const {Builder, By, until} = require("selenium-webdriver");
const assert = require("assert");

// Step: Nguoi dung dang o trang dang nhap
Given(`Toi o trang dang nhap {string}`, async function (url) {
   await this.driver.get(url);
   await this.driver.wait(until.urlContains(url), 10000);
});

// Step: Nhap ten dang nhap
When("Toi nhap ten dang nhap {string}", async function (username) {
   let usernameField = await this.driver.findElement(By.id("email"));
   await usernameField.sendKeys(username);
});

// Step: Nhap mat khau
When("Toi nhap mat khau {string}", async function (password) {
   let passwordField = await this.driver.findElement(By.id("password"));
   await passwordField.sendKeys(password);
   let showPasswordButton = await this.driver.findElement(By.id("showPassword"));
   await showPasswordButton.click();
   await this.driver.sleep(1000);
});

// Step: Nhan nut dang nhap
When("Toi nhan nut dang nhap", async function () {
   let loginButton = await this.driver.findElement(By.id("loginButton"));
   await loginButton.click();
   await this.driver.sleep(1000);
});

// Step: Kiem tra thong bao loi hien thi
Then("Toi se thay thong bao loi {string}", async function (expectedMessage) {
   let errorMessage = await this.driver.wait(until.elementLocated(By.className("Toastify")), 10000);
   let elementsWithText = await errorMessage.findElements(By.xpath(".//*"));
   let foundText = false;
   for (let element of elementsWithText) {
      let text = await element.getText();
      if (text.includes(expectedMessage)) {
         foundText = true;
         break;
      }
   }
   assert.strictEqual(foundText, true, `Expected message "${expectedMessage}" not found!`);
   await this.driver.sleep(1000);
});

// Step: Chuyen huong toi trang dashboard (trang chu)
Then("Toi se duoc chuyen huong den trang dashboard", async function () {
   try {
      let currentUrl = await this.driver.getCurrentUrl();
      assert.strictEqual(currentUrl, "http://localhost:8890/", `Current URL is not the dashboard URL!`);
      await this.driver.sleep(2000);
   } catch (error) {
      throw error;
   }
});
