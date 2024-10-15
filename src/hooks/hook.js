const {Before, After, Status, AfterStep} = require("@cucumber/cucumber");
const {Builder, By, until} = require("selenium-webdriver");

Before({tags: "@loginFeature"}, async function () {
   this.driver = await new Builder().forBrowser("chrome").build();
   await this.driver.manage().window().maximize();
});

AfterStep({tags: "@loginFeature"}, async function () {
   const data = await this.driver.takeScreenshot();
   const decodedImage = Buffer.from(data.replace(/^data:image\/(png|gif|jpeg);base64,/, ""), "base64");
   await this.attach(decodedImage, "image/png");
});

After({tags: "@loginFeature"}, async function () {
   const data = await this.driver.takeScreenshot();
   const decodedImage = Buffer.from(data.replace(/^data:image\/(png|gif|jpeg);base64,/, ""), "base64");
   await this.attach(decodedImage, "image/png");
   await this.driver.quit();
});
