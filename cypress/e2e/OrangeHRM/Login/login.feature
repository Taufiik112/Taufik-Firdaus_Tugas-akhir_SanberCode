Feature: Login Feature

        Scenario: Login with Valid Credentials
                Given I visit the URL
                And I should see the homepage
                When I submit the Username
                And I submit the Password
                Then I click the button Login
                And I see the dashoard

          Scenario: Unsuccessful login with invalid credentials
                Given I visit the URL
                When the user enters invalid "wrongUser" and "wrongPass"
                Then clicks the login button
                Then an error message should be displayed