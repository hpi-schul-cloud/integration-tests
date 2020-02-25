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

Given(/^user goes to account settings$/, function() {
    return helpers.loadPage(loginData.urlAccountSettings, 10);
  });
  
When(/^user changes email to (.*)$/, function(email) {
    return demo.tryChangeEmail(email)
  });  
 
  When(/^user submits the demo account demo account password (.*)$/, function(password) {
    return 'pending'
  });  
  Then(/^the email cannot be changed$/, function() {
    return 'pending'
  });  
