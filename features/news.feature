@news
Feature: Test /news features
Background: I am logged in as a teacher
Given the user is logged in as lehrer@schul-cloud.org

@newsIsVisibleToStudents
  Scenario: students can see the news
    When the user creates a news "Visible Task" "some content" "2000-01-01"
    When the user logs out
    When the user logs in as schueler@schul-cloud.org
    When the user goes to page /news
    Then the page does contain "Visible Task"

# @unpublishedNewsIsNotVisible
#   Scenario: User cannot see the news if the news is not due yet
#     When the user creates a news "Visible Task" "some content" "3000-01-01"
#     When the user logs out
#     When the user logs in as schueler@schul-cloud.org
#     When the user goes to page /news
#     Then the page does not contain "Visible Task"
