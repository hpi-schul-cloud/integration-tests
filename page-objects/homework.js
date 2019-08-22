'use strict';
const { CLIENT } = require("../shared-objects/servers");
const loginData = require('../shared-objects/loginData');
const courseData = require('../shared-objects/courseData');
const { expect } = require('chai');
const Login = require('../shared-objects/loginData');
const createCourse = require('../page-objects/createCourse');
const copyCourse = require('../page-objects/copyCourse');
let teacherLogin = require('../page-objects/teacherLogin');
//const addPupilToTheCourse = require('../page-objects/addPupilToTheCourse');
//const shared = { loginData };
//const course = { courseData };
const imageCompare = require('../runtime/imageCompare');
var fs = require('fs');
const firstLogin = require('../shared_steps/firstLogin.js');
let name;
let was_submitted_by; 

module.exports = {
  basicHomework: async function() {
    await copyCourse.chooseCourse();
    let homeworkSection = await driver.$(
      '#main-content > section > div.course-card > div.tabContainer > div > button:nth-child(2) > span'
    );
    await homeworkSection.click();
    let addBtn = await driver.$(
      '#main-content > section > div.course-card > div.sectionsContainer > div > div.section.active > div.row > div.col-sm-12.add-button > a'
    );
    await addBtn.click();
    let nameField = await driver.$('#homework-form > div:nth-child(5) > input');
    name = 'Homework Test';
    await nameField.setValue(name);
    let teamwork = await driver.$('#teamSubmissions');
    await teamwork.click();
    await this.setAccomplishTime();
    await this.setHometaskText();
  },
  setHometaskText: async function() {
    // Aufgabenstellung:
    await driver.switchToFrame(0);
    let body = await driver.$('body');
    let message = 'Here is some TEXT!';
    await body.setValue(message);
    await driver.switchToParentFrame();
  },
  setAccomplishTime: async function() {
    let startDate = await driver.$('#availableDate');
    let dueDate = await driver.$('#dueDate');

    var begin = await new Date();
    var beginToString = await this.dateToString(begin);
    var end = await this.randomDate(new Date(), new Date(2022, 0));
    var endToString = await this.dateToString(end);

    await startDate.setValue(beginToString);
    await driver.pause(500);
    await dueDate.setValue(endToString);
  },
  clickAdd: async function() {
    let addBtn2 = await driver.$(
      '#homework-form > div.modal-footer > button.btn.btn-primary.btn-submit'
    );
    await addBtn2.click();
  },

  dateToString: async function(date) {
    var dd = await date.getDate().toString();
    var mm = ((await date.getMonth()) + 1).toString();
    var yyyy = await date.getFullYear().toString();
    var minutes = await date.getHours().toString();
    var seconds = await date.getMinutes().toString();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    if (minutes < 10) {
      mm = '0' + mm;
    }
    var dateToBeSet =
      dd + '.' + mm + '.' + yyyy + '.' + minutes + '.' + seconds;
    return dateToBeSet;
  },
  randomDate: async function(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  },
  addHomework: async function() {
    let addBtn = await driver.$(
      '#homework-form > div.modal-footer > button.btn.btn-primary.btn-submit'
    );
    await addBtn.click();
  },
  addBasicHomework: async function() {
    await this.basicHomework();
    await this.clickAdd();
    await driver.pause(1000);
  },
  gotoTasks: async function() {
    let hometasks = await driver.$(
      'body > aside > nav > ul > li:nth-child(4) > a > i'
    );
    await hometasks.click();
  },
  sortHometasks: async function() {
    let sortBtn = await driver.$(
      '#filter > div > div.md-chip.md-theme-default.md-deletable.md-clickable > div'
    );
    await sortBtn.click();
    let select = await driver.$('#selection-picker > div > div');
    await select.click();
    let lastedited = await driver.$(
      'body > div.md-select-menu.md-menu-content-bottom-start.md-menu-content-small.md-menu-content.md-theme-default > div > ul > li:nth-child(2) > button'
    );
    await lastedited.click();
    let ok = await driver.$(
      'body > div.md-dialog.md-dialog-fullscreen.md-theme-default > div > div.md-dialog-actions > button.md-button.md-primary.md-theme-default > div > div'
    );
    await ok.click();
  },
  verify: async function() {
    await this.gotoTasks();
    await this.sortHometasks();
    let editBtn = await driver.$(
      '#main-content > div > section > ol > div:nth-child(1) > div > li:nth-child(1) > div > a.btn.btn-secondary.btn-sm.btn-edit'
    );
    await editBtn.click();
    // await adminLogin.compareScreenshots();
  },
  checkWithPupil: async function() {
    await helpers.loadPage(courseData.urlCourses, 20);
    await copyCourse.chooseCourse();
    let courseTasks = await driver.$(
      '#main-content > section > div.course-card > div.tabContainer > div > button:nth-child(2) > span'
    );
    await courseTasks.click();
  },
  privateHometask: async function() {
    await this.basicHomework();
    let isPrivate = await driver.$(
      '#homework-form > div:nth-child(10) > label:nth-child(1) > input[type=checkbox]'
    );
    await isPrivate.click();
    await this.clickAdd();
  },
  privateTaskVerify: async function() {
    let taskNames = await Promise.all(
      (await driver.$$('#homeworks > ol > div > li > a')).map(
        async element => await element.getText()
      )
    );
    await expect(taskNames).not.to.include(name);
  },
  pupilLogin: async function() {
    let name = "paula.meyer@schul-cloud.org";
    let password = "Schulcloud1!";
    return firstLogin.pupilLogin(name,password);
  },
  userLogsOut: async function() {
    await helpers.loadPage(courseData.urlLogout, 20);
  },
  pupilEditsTextHomework: async function() {
    let pass = "Schulcloud1!";
    let name = "paula.meyer@schul-cloud.org";
    await this.userLogsOut();
    await this.pupilLogin();
    await firstLogin.firstLoginPupilFullAge(name, pass);
    was_submitted_by = await firstLogin.getNameAndPosition();
    await helpers.loadPage(courseData.urlCourses, 20);
    await copyCourse.chooseCourse();
    let tasks = await driver.$(Login.elem.tasks_tab);
    await tasks.click();

    let task = await driver.$('#homeworks > ol > div > li:nth-child(1)');
    await task.click();
    let editBookmark = await driver.$('#submission-tab-link');
    await editBookmark.click();
    await driver.switchToFrame(0);
    let iframeBody = await driver.$('body');
    let assignmentText = 'here is some text which I want to submit';
    await iframeBody.setValue(assignmentText);
    await driver.switchToParentFrame();
    let ok = await driver.$('#submission > div.comment.editor > form > button');
    await ok.click();
  },
  teacherCanSeeTheTextSubmission: async function() {
    await this.userLogsOut();
    await teacherLogin.performLogin(
      Login.deafultTeacherUsername,
      Login.defaultTeacherpassword
    );
    await firstLogin.firstLoginTeacher();
    await helpers.loadPage(courseData.urlCourses, 20);
    await copyCourse.chooseCourse();
    let tasks = await driver.$(Login.elem.tasks_tab);
    await tasks.click();
    let homework = await driver.$('#homeworks > ol > div > li');
    await homework.click();
    let submissions_tab = await driver.$('#submissions-tab-link');
    await submissions_tab.click();
    
    let submitted_by_box = await driver.$('#submissions .groupNames > span');
    let submitted_by_name = await submitted_by_box.getText();
    await expect(was_submitted_by).to.contain(submitted_by_name);


  }
};
