import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import forgotPasswordPage from "../../../pom/forgotpassword/forgotpassword.cy";

Given("Saya masuk ke halaman login", () => {
  forgotPasswordPage.visitUrl();
  cy.wait(4000);
});
When("click button forgot password", () => {
  forgotPasswordPage.klikForgotPassword().click();
});
Then("Saya klik link forgot password", () => {
  forgotPasswordPage.klikForgotPassword();
  forgotPasswordPage.waiting();
});

When("Memastikan bahwa sudah berada di halaman forgot password", () => {
  forgotPasswordPage.verifyForgotPassword();
});
Then("Saya kembali kehalaman login dengan klik button cancel", () => {
  forgotPasswordPage.buttonCancel();
});

When("Saya memasukan username {string}", (data) => {
  forgotPasswordPage.getUsernameField(data);
  cy.wait(5000);
});
Then("Saya menekan button Reset Password", () => {
  cy.intercept("Get", "**/sendPasswordReset").as("sendPasswordReset");
  forgotPasswordPage.klikButtonReset().click();
  cy.wait("@sendPasswordReset");
  forgotPasswordPage.waiting();
});
Then("Saya button reset yang tidak ada username", () => {
  forgotPasswordPage.klikButtonReset().click();
});
Then("Saya melihat tulisan Reset Password link sent successfully", () => {
  forgotPasswordPage.verifyForgotPasswordSuccess();
});
Then("Saya melihat tulisan Required", () => {
  forgotPasswordPage.required();
});
