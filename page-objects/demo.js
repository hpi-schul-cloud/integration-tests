'use strict';
const helpers = require('../runtime/helpers.js')

module.exports = {
    demoLoginTeacher: async function() {
        let btn = '#loginarea input[data-testid="demoTeacherLogin"]';
        await helpers.waitAndClick(btn);
    },
    tryChangeEmail: async function(email) {
        let userPasswordField= "[data-testid='userPasswordField']";
        let status = await helpers.waitAndSetValue(userPasswordField, email);
    },

}
