'use strict';

let teacherLogin = require('../page-objects/teacherLogin');
let loginData = require('../shared-objects/loginData');
const firstLogin = require('../shared_steps/firstLogin.js');

Given(/^The teacher arrives on the Schul-Cloud homepage$/, async () => {
  return await ppage.goto(loginData.url)
});

When(/^the teacher puts in (.*) and (.*) and click the login-button$/, async (
  username,
  password
) => {
  const selectorUsername = 'input[name="username"]';
	const selectorPassword = 'input[name="password"]';
	const selectorSubmit = 'input[type="submit"]';

	await ppage.type(selectorUsername, username);
	await ppage.type(selectorPassword, password);
  await ppage.click(selectorSubmit);
});

Then(/^the teacher should accept the data protection$/, function() {
  return firstLogin.firstLoginTeacher();
});

Then(
  /^the teacher-dashboard should have an icon with the teacher's initials$/,
  function() {
    expect(ppage.url()).to.include("/dashboard");

  }
);
