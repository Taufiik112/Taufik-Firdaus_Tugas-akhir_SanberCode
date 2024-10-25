export default class loginPage {
  static visitUrl() {
    return cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  static verifyLoginPage() {
    return cy.get("h5").contains("Login");
  }
  static verifyDashboardPage() {
    return cy.get("h6").should("have.text", "Dashboard");
  }
  static inputUsername() {
    return cy.get('[name="username"]');
  }
  static inputPassword() {
    return cy.get('[name="password"]');
  }
  static buttonSubmit() {
    return cy.get('[type="submit"]');
  }
  static invalidCredentials() {
    return cy.get('[class="oxd-alert-content oxd-alert-content-error"]');
  }
  static dashboardPage() {
    return cy.get("h6").contains("Dashboard");
  }
}
