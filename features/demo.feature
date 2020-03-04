@demo
@demoPasswordChange
Feature: a demo account can change the email 

Background: a user logs in with the demoaccount, goes to settings and changes email address
Given the user started on the login page and

Scenario Outline: 
Given the user uses teacher demo account
When user goes to account settings
Then user cannot change email to <new email> in the profile with <password> 

Examples:
| new email                  | password   |
| newemail@schul-cloud.org   | schulcloud | 
