'use strict';

const loginData = require('../shared-objects/loginData');
const helpers = require('../runtime/helpers.js');
const demo = require('../page-objects/demo.js');

Given(/^the user started on the login page and$/, async function() {
    return await helpers.loadPage(loginData.urlStart, 10);
  });

Given(/^the user uses teacher demo account$/, async function() {
    return  await demo.demoLoginTeacher();
  });

When(/^user goes to account settings$/, function() {
    return helpers.loadPage(loginData.urlAccountSettings, 10);
  });
  
Then(/^user cannot change email to (.*) in the profile with (.*)$/, function(email,password) {
    return demo.tryChangeEmail(email,password)
  });  
 

