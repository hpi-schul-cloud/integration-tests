@news
Feature: Different options for news. I would like to test whether users with different permissions can see my news
Background: I am logged in as a teacher and I create some news
Given I am logged in as a teacher


@newsIsVisible
Scenario: User can see the news
When teacher creats some news which has to be published immediately
When a user who has permissions to see the news logs in
When he goes to the news page
Then he can see the news

@newsIsNotVisible
Scenario: User  cannot see the news if the news is not due yet
When teacher creats some news which has to be published later
When a pupil logs in
When he goes to news page
Then he cannot see the news which is not due yet

@teamNewsCorrectlyDisplayed
Scenario Outline: teacher creates team news and this news can only be visible for team members
When teacher adds one new student with <firstname1>, <lastname1>, <email1>
When teacher creates one new team with <teamname1> and
When teacher adds student with <firstname1> and <lastname1> to this team
When teacher creates news for this Team <teamname1>
When teacher adds another student with <firstname2>, <lastname2>, <email2>
When teacher creates one new team with <teamname2> and
When teacher adds student with <firstname2> and <lastname2> to that team
When teacher creates News for <teamname2>
Then student with <email2> should not see the team news of the <teamname1>

Examples:
| teamname1 | teamname2 | firstname1 | lastname1 | email1 | firstname2 | lastname2 | email2 | 
| test team one | test team two  | Mia | Raupe | raupe@schul-cloud.org | Ronald | Müller | mueller@schul-cloud.org | 
