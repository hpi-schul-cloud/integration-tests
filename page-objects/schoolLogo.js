'use strict';
//const pathDirectory = require('../runtime/img');
const path = require('path');

module.exports = {
  verifyUpload: async function() {
      

  },
  uploadSchoolLogo: async function() {
      //let uploadBtn = await driver.$('[data-testid="upload_load_btn"]');
      //await uploadBtn.click();
      const filePath = await path.join(__dirname, '../runtime/img/logo-logo-schwarz-100_760x340.png');
      const remoteFilePath = await driver.uploadFile(filePath);
    //   await driver.$('#logo-input').setValue(remoteFilePath);
    //   let uploadElement = await driver.$('#logo-input');
    //   await uploadElement.sendKeys('../runtime/img');

    let logoFileInput = await driver.$('#logo-input');
    await logoFileInput.setValue(remoteFilePath);
    await driver.pause(1500);
    let container = await driver.$('.edit-form-school');
    let submitBtn = await container.$('button[type="submit"]');
    await submitBtn.click();

    },




}
