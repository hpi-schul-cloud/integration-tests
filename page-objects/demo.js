'use strict';
const helpers = require('../runtime/helpers.js')

module.exports = {
    demoLoginTeacher: async function() {
       // let btn = await driver.$("input[data-testid='demoTeacherLogin']");
        //await btn.click();
       let btn = await driver.selectByAttribute('data-testid', "demoTeacherLogin");
       await btn.click();
       // await helpers.waitAndClick(btn);
    },
    tryChangeEmail: async function(email) {
        let userPasswordField= "[data-testid='userPasswordField']";
        let status = await helpers.waitAndSetValue(userPasswordField, email);
    },

}
