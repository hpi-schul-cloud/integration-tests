@createHomework
Feature: create different types oh homework
as a teacher (klara.fall"@"schul-cloud.org) I can create different types of homework and as a student (paula.meyer"@"schul-cloud.org)
I can submit the solution for the assignment


Background: a teacher logs in and creates a course
Given the teacher starts on the login page
Given the teacher is logged-in successfully
Given the teacher goes to the course page as a next step

@createSimpleHomework
Scenario Outline: create a simple hometask
Given the teacher creates one course with <coursename> and pupil with <firstname> and <lastname>:
When teacher clicks "create a new home task" in <coursename> and
When the teacher creates a task with name <taskname>
When teacher submits the data
Then the hometask <taskname> is to be found at the task pannel

Examples:
| coursename | firstname| lastname | taskname| 
| test hometask  | Paula | Meyer | task example | 

@createPrivateHomework
Scenario Outline: create a private hometask
When teacher creates a private hometask with <taskname>
When if the student <username> <password> of this course goes to hometasks
Then the student will not see this task

Examples:
| taskname | username | password |
| private task example | paula.meyer@schul-cloud.org | Schulcloud1! | 

@submitTextHomework
Scenario: pupil submits a homework and teacher evaluates it
When the teacher creates a basic text homework
When the pupil edits a text hometask
Then the teacher should see the changes been done
Then the teacher can evaluate it


@submitFileHomework
Scenario Outline: 
Given the Teacher creates one course with <coursename> and pupil with:
When Teacher creates a homework for the course <coursename> and
When the teacher puts in data <taskname> and some text description of the task
When the User logs in with <username> <password> and
When the user goes to the course <coursename> where the hometask <taskname> must be submitted
Then the students can upload a file as a solution

Examples:
| coursename | firstname   | lastname | taskname   | username                     | password |
| course with file task | Paula       | Meyer    | file task  | paula.meyer@schul-cloud.org  | Schulcloud1! |



