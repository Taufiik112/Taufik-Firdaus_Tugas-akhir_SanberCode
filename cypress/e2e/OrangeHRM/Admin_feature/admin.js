import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../pom/login/login.cy";
import adminPage from "../../../pom/admin/adminAdd.cy";
import adminFiturPage from "../../../pom/admin/adminfitur.cy";
//Akses Login
Given("Saya login untuk bisa masuk kemenu admin", () => {
  loginPage.visitUrl();
  loginPage.inputUsername().type("Admin");
  loginPage.inputPassword().type("admin123");
  loginPage.buttonSubmit().click();
});
//klik pada button sidebar Admin
When("Saya menekan Sidebar button menu admin", () => {
  adminPage.buttonAdminSidebar();
});
//verifikasi bahwa sudah masuk kehalaman Admin
When("Saya memastikan bahwa sudah masuk ke halaman admin", () => {
  adminPage.verifyadminPage().should("have.text", "Admin");
});
//INI UNTUK ADD FITURE
When("Saya menekan button Add", () => {
  cy.intercept(
    "Get",
    "https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser"
  ).as("save");
  adminPage.getAddButton().click();
  cy.wait("@save");
});
//saya menekan dropdown role user 'admin'
When("Saya klik user role admin", () => {
  adminPage.getRoleAdmin();
});
//saya menekan dropdown status 'Enabled'
When("Saya klik user role status enabled", () => {
  adminPage.getRoleEnabled();
});
//menambahkan nama james pada employee
When("Saya menambahkan data Employee james", () => {
  adminPage.getEmployee();
});
//menambahkan username 'taufik123'
When("Saya menambahkan Username", () => {
  adminPage.getUsernameField();
});
//menambahkan password 'taufik123'
When("Saya menambahkan Password", () => {
  adminPage.getPasswordField();
});
//menambahkan confirm password 'taufik123'
When("Saya menambahkan confirm Password", () => {
  adminPage.getConfirmPasswordField();
});
//menekan tombol save
When("Saya menekan tommbol Save", () => {
  cy.intercept(
    "Get",
    "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
  ).as("saveUser");
  adminPage.getSaveButton();
  cy.wait("@saveUser");
});

//Sampai sini

//INI FITUR ADMIN PAGE
// search by Username
When("Saya mencari berdasarkan Username {string} admin", (username) => {
  adminFiturPage.usernameInput().type(username);
  adminFiturPage.searchButton();
  adminFiturPage.waiting();
  adminFiturPage.resetButton();
});
//Memilih Role Admin
When("Saya mencari user berdasarkan Role admin", () => {
  adminFiturPage.clickRoleAdmin();
  adminFiturPage.searchButton();
  adminFiturPage.waiting();
  adminFiturPage.resetButton();
});
//Memilih Role ESS
When("Saya mencari user berdasarkan Role ESS", () => {
  adminFiturPage.clickRoleESS();
  adminFiturPage.searchButton();
  adminFiturPage.waiting();
  adminFiturPage.resetButton();
});
//Klik search Button
Then("Saya klik button Search", () => {
  adminFiturPage.searchButton().click();
});
//Mencari menggunakan Employee
When("Saya mencari user berdasarkan Employee", () => {
  adminFiturPage.EmployeeNameField();
  adminFiturPage.searchButton();
  adminFiturPage.waiting();
  adminFiturPage.resetButton();
});
//Mencari menggunakan Status Enabled
When("Saya mencari user berdasarkan Status enabled", () => {
  adminFiturPage.clickStatusEnabled();
  adminFiturPage.searchButton();
});
//Mencari menggunakan Status disabled
When("Saya mencari user berdasarkan Status disabled", () => {
  adminFiturPage.clickStatusDisabled();
  adminFiturPage.searchButton();
});
//mencari data berdasarkan Username, Role, dan status
When(
  "Saya mencari user berdasarkan semua element element admin, admin, enabled",
  () => {
    adminFiturPage.usernameInput().type("Admin");
    adminFiturPage.clickRoleAdmin();
    // adminFiturPage.EmployeeNameField();
    adminFiturPage.clickStatusEnabled();
    adminFiturPage.searchButton();
  }
);
//mencari data berdasarkan ESS, dan enabled
When("Saya mencari user berdasarkan element ESS, enabled", () => {
  // adminFiturPage.usernameInput().type("Admin");
  adminFiturPage.clickRoleESS();
  // adminFiturPage.EmployeeNameField();
  adminFiturPage.clickStatusEnabled();
  adminFiturPage.searchButton();
});
//mencari data ditengah atau yang ke 3
When("Saya mengecek data ke 3 atau data tengah", () => {
  adminFiturPage.dataCenter();
  adminFiturPage.waiting();
});

//Klik Reset Button
When("Saya klik button Reset", () => {
  adminFiturPage.resetButton();
});

When("Saya mencari username {string}", (username) => {
  adminFiturPage.usernameInput().type(username);
  adminFiturPage.searchButton();
  adminFiturPage.waiting();
});
//menghapus data taufik123
When("Saya akan menghapus data ini taufik_firdaus", () => {
  adminFiturPage.deleteData();
  adminFiturPage.waiting();
  adminFiturPage.ButtonYes();
});
//SAMPAI SINI
