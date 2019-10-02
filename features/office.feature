@office
Feature: user can create a document and edit it (SuS, LuL)

Background: user is successfully logged in

Given the teacher goes to login page 
Given the user logs in and
Given the user goes to "my data"

Scenario: open text document and edit it (LuL und SuS)
When the user creates a new text document
