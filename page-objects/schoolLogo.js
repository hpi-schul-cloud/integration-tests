'use strict';
//const pathDirectory = require('../runtime/img');
const path = require('path');
let remoteFilePath;

module.exports = {
  verifyUpload: async function() {
    await driver.reloadPage()
    let selector = await driver.$('#preview-logo');
    let src = await selector.getAttribute('src');

   // let src = await selector.

      

  },
  uploadSchoolLogo: async function() {
   
    const filePath = path.join(__dirname, '../runtime/img/logo-logo-schwarz-100_760x340.png');

   // const remoteFilePath = await driver.uploadFile(filePath);
    let uploadElement = await driver.$('#logo-input');
    await driver.attachFile(uploadElement, filePath);
    //await uploadElement.chooseFile(uploadElement, filePath);
   // await uploadElement.setValue(remoteFilePath);
    await driver.pause(1500);
    let container = await driver.$('.edit-form-school');
    let submitBtn = await container.$('button[type="submit"]');
    await submitBtn.click();

    },




}
