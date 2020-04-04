'use strict';

let loginData = require('../shared-objects/loginData');

Given(/^The teacher arrives on the Schul-Cloud homepage$/, async () => {
	return await browserPage.goto(loginData.url);
});

When(
	/^the teacher puts in (.*) and (.*) and click the login-button$/,
	async (username, password) => {
		const selectorUsername = 'input[name="username"]';
		const selectorPassword = 'input[name="password"]';
		const selectorSubmit = 'input[type="submit"]';

		await browserPage.type(selectorUsername, username);
		await browserPage.type(selectorPassword, password);
		await browserPage.click(selectorSubmit);
	}
);

Then(/^the teacher should accept the data protection$/, async () => {
	await browserPage.click('#nextSection');
	await browserPage.click('#nextSection');
	await browserPage.waitFor("input[name='privacyConsent']");
	await browserPage.click("input[name='privacyConsent']");
	await browserPage.click("input[name='termsOfUseConsent']");
	await browserPage.click('#nextSection');
	await browserPage.waitFor('.form-submitted');
	await browserPage.click('a[data-testid="btn_schul-cloud_erkunden"]');
});

Then(
	/^the user should see the dashboard with there ([A-Z]{2})$/,
	async (initials) => {
		expect(browserPage.url()).to.include('/dashboard');
		expect(await browserPage.$eval('.initials', (e) => e.innerText)).to.equal(
			initials
		);
	}
);
