'use strict';
let firstLogin = require('../shared_steps/firstLogin.js');
let news = require('../page-objects/news');
let teacherLogin = require('../page-objects/teacherLogin');
let courseData = require('../shared-objects/courseData');
let newStudent = require('../page-objects/administration');
let newTeam = require('../page-objects/createTeam');
const Login = require('../shared-objects/loginData');
let name = "news";
let laterNewsName = "news should be published later";



Given(/^I am logged in as a teacher$/, function() {
  helpers.loadPage(courseData.urlLogin, 20);
  return teacherLogin.performLogin(
    Login.defaultTeacherUsername,
    Login.defaultTeacherpassword
  );
});
When(/^teacher creats some news which has to be published immediately$/, function() {
  return news.performCreateNews(name);
});

When(/^a user who has permissions to see the news logs in$/, function() {
  return news.loginAsPupil();
});
When(/^he goes to the news page$/, function() {
  return news.gotoNews();
});
Then(/^he can see the news$/, async function() {
  let newsNames = await news.verifyWhetherVisible();
  await expect(newsNames).to.include(name);
});

When(/^teacher creats some news which has to be published later$/, function() {
  return news.performCreateNewsLater(laterNewsName);
});

When(/^a pupil logs in$/, function() {
  return news.loginAsPupil();
});
When(/^he goes to news page$/, function() {
  return news.gotoNews();
});
Then(/^he cannot see the news which is not due yet$/, async function() {
  let newsNames = await news.verifyWhetherVisible();
  await expect(newsNames).not.to.include(name);
});
// TEAM

When(/^teacher adds one new student with (.*), (.*), (.*)$/, function(firstname1, lastname1, email1) {
  return newStudent.performCreateNewPupil(firstname1, lastname1, email1);
});
When(/^teacher creates one new team with (.*) and$/, function(teamname1) {
  return newTeam.createTeamSteps(teamname1);
});
When(/^teacher adds student with (.*) and (.*) to this team$/, async function(firstname1, lastname1) {
  let fullname = await firstLogin.getFullname(firstname1,lastname1);
  return newTeam.addOneTeamMemberHelperForTeamNews(fullname);
});
When(/^teacher creates news for this Team (.*)$/, function(teamname1) {
  return news.createTeamNews(teamname1);
});
When(/^teacher adds another student with (.*), (.*), (.*)$/, function(firstname2, lastname2, email2) {
  return newStudent.performCreateNewPupil(firstname2, lastname2, email2);
});
When(/^teacher creates another team with (.*) and$/, function(teamname2) {
  return newTeam.createTeamSteps(teamname2);
});
When(/^teacher adds student with (.*) and (.*) to that team$/, async function(firstname2, lastname2) {
  let fullname = await firstLogin.getFullname(firstname2, lastname2);
  return newTeam.addOneTeamMemberHelperForTeamNews(fullname);
});
When(/^teacher creates News for (.*)$/, async function(teamname2) {
  return news.createTeamNews(teamname2);
});

Then(/^student with (.*) should not see the team news of the (.*)$/, function(email2, password2, teamname1) {
  return news.canNonTeamMemberSeeTheNews(email2, password2, teamname1);
}); 
