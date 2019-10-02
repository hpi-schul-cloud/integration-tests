'use strict';

let loginData = require('../shared-objects/loginData');
let firstLogin = require('../shared_steps/firstLogin.js');
let log = global.log;
let image;

module.exports = {
    setTeamNameAndConfirm: async function() {
        let name = "A team!";
        let nameField = await WebDriver.$('input[data-testid="team_name"]');
        await nameField.setValue(name);
        let confirmBtn = await WebDriver.$('button[data-testid="create_team_btn"]');
        await confirmBtn.click();
    },
    goToAddPupils: async function() {
        let settingsBtn = await WebDriver.$('a[data-testid="team_settings"]');
        await settingsBtn.click();
        let administrateOption = await WebDriver.$('#administrate_team_members');
        await administrateOption.click();
        let internalMembers = await WebDriver.$('#internal_team_members');
        await internalMembers.click();
     
    },
    addPupils: async function(name1, name2) {
        let container = await driver.$('#userIds___chosen > ul');
        let searchBox = await container.$('li > input');
        await searchBox.click();
      
    },
    performAddPupils: async function(name1, name2) {
        await this.setTeamNameAndConfirm();
        await this.goToAddPupils();
        await this.addPupils(name1, name2);

    }




}
