'use strict';

let teacherLogin = require('../page-objects/teacherLogin');
let loginData = require('../shared-objects/loginData');
let shared = { loginData };
let page = { teacherLogin };
let firstLogin = require('../shared_steps/firstLogin.js');


Given(/^The Teacher arrives on the Schul-Cloud homepage$/, function() {
  return helpers.loadPage(shared.loginData.url, 10);
});

When(/^the Teacher puts in (.*) and (.*) and click the login-button$/, function(
  username,
  password
) {
  /** use a method on the page object which also returns a promise */
  return page.teacherLogin.performLogin(username, password);
});

When(/^the Teacher should accept the data protection$/, function() {
  return firstLogin.firstLoginTeacher();
});

Then(
  /^the Teacher-dashboard should have an icon with the teacher's initials$/, function() {
    return teacherLogin.loginResult();
});


