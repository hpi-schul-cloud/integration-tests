
@firstLoginWithoutAgeData
Feature: first login
Background: teacher has created a user without submiting age
Given teacher has come to schul-cloud home page
Given teacher has logged in 

@firstLoginUnder14
Scenario Outline: User is under 14 and user makes first login
When teacher has created a user with <firstnameSTUDENT>, <lastnameSTUDENT>, <emailSTUDENT> without submitting the age
When teacher chooses the student with <emailSTUDENT> from the table
When teacher has created a link for this student
When user navigates a Link
Then user should choose that the user is under 16
Then user should submit the birthday information
Then parents of the student should submit their <firstnamePARENT>, <lastnamePARENT>, <emailPARENT> and submit a consent
Then parents should submit a code from the email <emailPARENT> generated by the system
Then parents click login button
Then user can log in with the data which was set by the parents

Examples:
| firstnameSTUDENT | lastnameSTUDENT | emailSTUDENT | firstnamePARENT | lastnamePARENT | emailPARENT | 
| New Student | Underfourteen | underfourteen@schul-cloud.org  | Parent Firstname  | Parent Lastname  | parents@schul-cloud.org  | 


@firstLoginUnderBetween14And16
Scenario Outline: User is not younger than 14 and under 16 makes firstlogin
When teacher has created a User with <firstnameSTUDENT>, <lastnameSTUDENT>, <emailSTUDENT> without submitting the age
When teacher chooses the Student with <emailSTUDENT> from the table
When teacher has created a link for this Student
When User navigates a Link
Then User should choose that the user is under 16
Then User should submit the birthday information
Then Parents of the student should submit their <firstnamePARENT>, <lastnamePARENT>, <emailPARENT> and student submits a consent
Then Parents should submit a code from the email <emailPARENT> generated by the system
Then Parents press login button
Then User can log in with the data which was set by the parents

Examples:
| firstnameSTUDENT | lastnameSTUDENT | emailSTUDENT | firstnamePARENT | lastnamePARENT | emailPARENT | 
| New Student | betweenfourteenandsixteen  | betweenfourteenandsixteen@schul-cloud.org  | Parent Firstname  | Parent Lastname  | parents@schul-cloud.org  |



#Scenario: User is >=16 and makes first login
#When user navigates the genirated link
#Then user should choose that the user is over 16
#Then user should submit the birthday info
#Then the student should submit a consent
#Then the student should submit a code from the email generated by the system
#Then the student sets password and finishes the registration process
#Then the student can log in with the data 

