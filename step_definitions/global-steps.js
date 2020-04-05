'use strict';

const { CLIENT } = require('../shared-objects/servers');

Given(/^the user has opened (\/.*)$/, async (url) => {
	return await browserPage.goto(`${CLIENT.URL}${url}`);
});

Then(/^the user should be on page (\/.*)$/, async (url) => {
	expect(browserPage.url()).to.equal(`${CLIENT.URL}${url}`);
});

Then(
	/^the user should see the notification "(.*)"$/,
	async (expectedNotification) => {
		const notificationContents = await browserPage.$$eval(
			'.notification .notification-content',
			(notifications) =>
				notifications.map((notification) => notification.innerText)
		);
		expect(notificationContents).to.include(expectedNotification);
	}
);
