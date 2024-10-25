import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login/login.cy";

Given("I visit the URL", () => {
  loginPage.visitUrl();
  cy.wait(1000);
});

When("I should see the homepage", () => {
  loginPage.verifyLoginPage().should("have.text", "Login");
});

When("I submit the Username", () => {
  loginPage.inputUsername().type("Admin");
});

When("I submit the Password", () => {
  loginPage.inputPassword().type("admin123");
});

Then("I click the button Login", () => {
  cy.intercept("Get", "**/action-summary").as("action");
  loginPage.buttonSubmit().click();
  cy.wait("@action");
});

When("the user enters invalid {string} and {string}", (username, password) => {
  loginPage.inputUsername().type(username);
  loginPage.inputPassword().type(password);
  cy.wait(6000);
});
Then("clicks the login button", () => {
  loginPage.buttonSubmit().click();
});

Then("an error message should be displayed", () => {
  cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]').should(
    "have.text",
    "Invalid credentials"
  );
});
When("I see the dashoard", () => {
  loginPage.verifyDashboardPage();
});
