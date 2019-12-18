'use strict';
let teacherLogin = require('../page-objects/teacherLogin');
let createCourse = require('../page-objects/createCourse');

let copyCourse = require('../page-objects/copyCourse');
let homework = require('../page-objects/homework');
let courseData = require('../shared-objects/courseData');
const Login = require('../shared-objects/loginData');


Given(/^the teacher starts on the login page$/, function() {
  return helpers.loadPage(courseData.urlLogin, 20);
});

Given(/^the teacher is logged-in successfully$/, function() {
  return teacherLogin.performLogin(
    Login.defaultTeacherUsername,
    Login.defaultTeacherpassword
  );
});

Given(/^the teacher goes to the course page as a next step$/, function() {
  let url = courseData.urlCourses;
  return helpers.loadPage(url, 20);
});

Given(/^the teacher creates one course with (.*) and pupil with (.*) and (.*):$/, function(coursename, firstname, lastname) {

  return copyCourse.create(coursename);
});
When(/^teacher clicks "create a new home task" in (.*) and$/, function(coursename) {
  return homework.clickCreateNewTaskInTheCourse(coursename);
});
When(/^the teacher creates a task with name (.*)$/, function(taskname) {
  return homework.setHometaskData(taskname);
});

When(/^teacher submits the data$/, function() {
  return homework.clickAdd();
}); 

Then(/^the hometask (.*) is to be found at the task pannel$/, function(taskname) {
  return homework.verify(taskname);
});

/* PRIVATE */

When(/^teacher creates a private hometask with (.*)$/, function(taskname) {
  return homework.addPrivateHometask(taskname);
});
Then(/^if any pupil of this course goes to hometasks$/, function() {
  return homework.checkWithPupil();
});
Then(/^the pupil will not see this task$/, function() {
  return homework.privateTaskVerify();
});

/* SUBMISSION */
When(/^the teacher creates a basic text homework$/, function() {
  return homework.addBasicHomework();
});
When(/^the pupil edits a text hometask$/, function() {
  return homework.pupilEditsTextHomework();
});
Then(/^the teacher should see the changes been done$/, function() {
  return homework.teacherCanSeeTheTextSubmission();
});
Then(/^the teacher can evaluate it$/, function() {
  return homework.evaluateSubmission();
});

/* File homework submission*/
Given(/^the Teacher creates one course with (.*) and pupil with:$/, function(coursename) {
  return copyCourse.create(coursename);
}); 
When(/^Teacher creates a homework for the course (.*)$/, function(coursename) {
  return homework.clickCreateNewTaskInTheCourse(coursename);
});
When(/^the teacher puts in data (.*) and some text description of the task$/, function(taskname) {
  return homework.setHometaskData(taskname);
});

When(/^the User logs in with (.*) (.*) and$/, function(username, password) {
  return homework.pupilLogsInAndGoesToTasksOfTheCourse(username, password);
});
When(/^the user goes to the course (.*) where the hometask (taskname) must be submitted$/, function(coursename, taskname) {
  return homework.uploadAHomework();
});
Then(/^the students can upload a file as a solution$/, function() {
  return homework.uploadAHomework();
});
