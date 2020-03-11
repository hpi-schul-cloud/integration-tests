@createTeam
Feature: a teacher can create a team 

Background: a teacher logged in and created a new pupil 

Given the teacher started on the login page and
Given teacher successfully logged in


Scenario Outline: create a team with two new members
When teacher adds a new student with <firstname1>, <lastname1>, <email1>
When teacher adds one more student with <firstname2>, <lastname2>, <email2>
When teacher creates a new team with <teamname> and
When teacher adds two students to this team
Then this team should be displayed on the team page

Examples:
| teamname  | firstname1 | lastname1 | email1                | firstname2 | lastname2 | email2                  | 
| test team | Mia        | Raupe     | raupe@schul-cloud.org | Ronald     | Müller    | mueller@schul-cloud.org | 

@teamPermissionsCheck

Feature: a user can do allowed actions and cannot do action for which he/she has no permissions

Scenario Outline: user logs in and according to his/her role can do some actions in/with teams
Given the user started on the login page and
Given the user with <username> and <password> successfully logged in
Given the user has a certain role x
When the user has a certain permission for the role x
Then the user can do some actions in accordance with this permission
Then the user cannot do actions related to permission he/she doesnt have

Examples:
| username                       | password          | 
| demo-schueler@schul-cloud.org  | schulcloud        | 
| paula.meyer@schul-cloud.org    | Schulcloud1!      | 
| klara.fall@schul-cloud.org     | Schulcloud1!      | 
| admin@schul-cloud.org          | Schulcloud1!      | 
