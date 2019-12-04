'use strict';

const schoolLogo = require('../page-objects/schoolLogo');
const firstLogin = require('../shared_steps/firstLogin.js');
const Admin = require('../shared-objects/administrationData');
const loginData = require('../shared-objects/loginData');
let adminLogin = require('../page-objects/adminLogin');


Given(/^admin navigates to Schul-Cloud page and$/, function() {
    let url = loginData.url;
    return helpers.loadPage(url, 10);
  });
  
Given(/^admin logs in with (.*) and (.*)$/, function(email,password) {
    return adminLogin.performLogin(email, password);
});
  
Given(/^admin accepts data protection$/, function() {
    return firstLogin.firstLoginTeacher();
});
Given(/^admin goes to school administartion$/, async function() {
    let url = Admin.urlSchoolAdministraion;
    await helpers.loadPage(url, 10);
});
Given(/^admin goes to School administartion$/, async function() {
    let url = Admin.urlSchoolAdministraion;
    await helpers.loadPage(url, 10);
});
When(/^admin uploads a school logo$/, function() {
    return schoolLogo.uploadSchoolLogo();
});
Then(/^admin sees it afterwards$/, function() {
    return schoolLogo.verifyUpload()
});
