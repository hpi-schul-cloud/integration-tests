'use strict';

const { CLIENT } = require('../shared-objects/servers');

Given(/^the user has opened (\/.*)$/, async (url) => {
	return await browserPage.goto(`${CLIENT.URL}${url}`);
});
