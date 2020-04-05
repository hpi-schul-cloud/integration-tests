const { CLIENT } = require('../shared-objects/servers');

const { doLogin, doLogout } = require('../page_objects/global');

Given(/^the user has opened (\/.*)$/, (url) => {
	return browserPage.goto(`${CLIENT.URL}${url}`);
});
Given(
	/^the user is logged in as ([a-z\-\.@]*)(?: with password (.*))?$/,
	doLogin
);

When(/^the user goes to page (\/.*)$/, (url) => {
	return browserPage.goto(`${CLIENT.URL}${url}`);
});
When(/^the user logs in as ([a-z\-\.@]*)(?: with password (.*))?$/, doLogin);
When(/^the user logs out$/, doLogout);

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
Then(/^the page does contain "(.*)"$/, async (textContent) => {
	await browserPage.goto(`${CLIENT.URL}/news`);
	const pageContent = await browserPage.content();
	expect(pageContent).to.include(textContent);
});
Then(/^the page does not contain "(.*)"$/, async (textContent) => {
	await browserPage.goto(`${CLIENT.URL}/news`);
	const pageContent = await browserPage.content();
	expect(pageContent).to.not.include(textContent);
});
