@demo
@demoPasswordChange
Feature: a demo account can change the email 

Background: a user logs in with the demoaccount, goes to settings and changes email address
Given the user started on the login page and

Scenario Outline: 
Given the user uses teacher demo account
Given user goes to account settings
When user changes email to <new email>
When user submits the demo account demo account password <password>
Then the email cannot be changed
Examples:
| new email                  | password   |
| newemail@schul-cloud.org   | schulcloud | 
