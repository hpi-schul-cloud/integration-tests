'use strict';
const { CLIENT } = require("../shared-objects/servers");

const loginData = require('../shared-objects/loginData');
const courseData = require('../shared-objects/courseData');
const teacherLogin = require('../page-objects/teacherLogin');
const shared = { loginData };
const course = { courseData };
const { expect } = require('chai');
let before;

module.exports = {
  count: async function() {
    const countBadge = await driver.$('[data-tab="js-active"] .count-badge');
    const number = await countBadge.getAttribute("data-badge");
    return parseInt(number, 10)
  },
  countBefore: async function() {
    before = await this.count();
    return before;
  },
  verify: async function() {
    let after = await this.count();
    let result = after - before;
    await expect(result).to.equal(1);
  },
  createCourse: async function() {
    let url = `${CLIENT.URL}/courses/add`;
    await helpers.loadPage(url,100);
    let selectorToBeLoaded = await driver.$('input[data-testid="coursename"]');
    await selectorToBeLoaded.waitForExist(2000);
  },
  inputCourseName: async function(courseName) {
    let inputCourseName = await driver.$('input[data-testid="coursename"]');
    await inputCourseName.setValue(courseName);
  },
  chooseColor: async function() {
    let inputColor = await driver.$(courseData.elem.colorCourse);
    await inputColor.click();
  },
  performCreateCourse: async function() {
    let weiterBtn2 = await driver.$('#nextSection');
    await weiterBtn2.click();

    let kursAnlegenUndWeiterBtn = await driver.$('#nextSection');
    await kursAnlegenUndWeiterBtn.click();
    await driver.$('.form-submitted');
  },

};


