@register
Feature: new student can register

Background: a teacher logged in and created a student without submitting age

Given the teacher started on the login page and
Given teacher successfully logged in
Given teacher created student without submitting age

# under 14:
Scenario: register student under 14
When student uses the invitation link to register on schulcloud
When student is under 14
Then the parents of the student shout fill the register form 
Then the parents should submit a code to finish the registration

Scenario: register student under 14
When student uses the invitation link to register on schulcloud
When student is under 16
Then the parents of the student shout fill the register form 
Then the parents should submit a code to finish the registration

