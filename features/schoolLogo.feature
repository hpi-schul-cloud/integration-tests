@schoolLogo
Feature: Logging in as an admin and upload a school logo
As an school admin on Schul-Cloud I want to be able to upload a school logo

Scenario Outline: 
Background: 
Given admin navigates to Schul-Cloud page and 
Given admin logs in with <email> and <password>
Given admin accepts data protection
Given admin goes to School administartion
When admin uploads a school logo
#Then admin sees it afterwards

Examples:
| email                  | password             |
| admin@schul-cloud.org  | Schulcloud1!         |

