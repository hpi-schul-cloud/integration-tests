
@login
Feature: Logging in as a user

@loginHomepage
  Scenario Outline: I want to be able to login from the homepage with my user account
    Given the user has opened /
    When the user puts in <username> and <password> and click the login-button
    Then the user should accept the data protection
    Then the user should see the dashboard with there initials <initials>

    Examples:
      |username|password|initials|
      |schueler@schul-cloud.org|Schulcloud1!|MM|
      |lehrer@schul-cloud.org|Schulcloud1!|CC|
      |admin@schul-cloud.org|Schulcloud1!|TT|

@loginLogin
  Scenario Outline: I want to be able to login from the login page with my user account
    Given the user has opened /login
    When the user puts in <username> and <password> and click the login-button
    Then the user should accept the data protection
    Then the user should see the dashboard with there initials <initials>

    Examples:
      |username|password|initials|
      |schueler@schul-cloud.org|Schulcloud1!|MM|
      |lehrer@schul-cloud.org|Schulcloud1!|CC|
      |admin@schul-cloud.org|Schulcloud1!|TT|
