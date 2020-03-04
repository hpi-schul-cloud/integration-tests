'use strict';


module.exports = {
    demoLoginTeacher: async function() {
      let demoLoginInSection = await driver.$('.logins  [data-testid="demoStudentLogin"]')
      await demoLoginInSection.click();
      await driver.waitUntil(() => {
          return driver.$('body');

      }, 2000)
    },
    tryChangeEmail: async function(email, password) {
        await this.gotoProfileSettings();
        let userPasswordField = await driver.$("[data-testid='userPasswordField']");
        let oldEmail = await userPasswordField.getValue();
        await userPasswordField.setValue(email);
        await this.enterPasswordAndSubmit(password);
        let status = await userPasswordField.getValue();
        await expect(status).to.equal(oldEmail); 
    },
    gotoProfileSettings: async function() {
        let icon = await driver.$('[data-testid="initials"]');
        await icon.click();
        let settings = await driver.$('[data-testid="settings"]');
        await settings.click();
        await driver.waitUntil(() => {
            return driver.$('body');
  
        }, 2000)
    },
    enterPasswordAndSubmit: async function(password) {
        let passwordField = await driver.$('[data-testid="settings_password_current"]');
        await passwordField.setValue(password);
        let submitBtn = await driver.$('[data-testid="submit_new_password_btn"]');
        await submitBtn.click();
        await driver.pause(DELAY_500_MILLISECOND);
    }
  
}
