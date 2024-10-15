const {Given, When, Then} = require("@cucumber/cucumber");
const assert = require("assert");
const supertest = require("supertest");

const request = supertest("http://localhost:3000/api/v1/users");
let username = "";
let password = "";
let response;

Given("Toi co ten dang nhap {string}", (arg0) => {
   username = arg0.email;
});

Given("Toi co mat khau {string}", (arg0) => {
   password = arg0;
});

When("Toi gui yeu cau POST den {string}", async (arg0) => {
   response = await request.post(arg0).send({email: username, password: password});
});

Then("Toi se nhan duoc ma trang thai {int}", (expectedStatusCode) => {
   assert.strictEqual(response.body.status, expectedStatusCode);
});

Then("thong bao phan hoi se la {string}", (expectedMessage) => {
   if (response.body.status != 200) {
      assert.strictEqual(response.body.error, expectedMessage);
      return;
   }
   assert.strictEqual(response.body.message, expectedMessage);
});

Then("Toi se nhan duoc mot token moi", () => {
   assert.ok(response.body.accessToken);
});

Then("Toi se nhan duoc mot refresh token", () => {
   assert.ok(response.body.refreshToken);
});
