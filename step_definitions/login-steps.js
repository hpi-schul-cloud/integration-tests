const {
	doLogin,
	doFirstLogin,
	expectInitials,
} = require('../page_objects/login');

When(/^the user puts in (.*) and (.*) and click the login-button$/, doLogin);

Then(/^the user should accept the data protection$/, doFirstLogin);

Then(
	/^the user should see the dashboard with there initials ([A-Z]{2})$/,
	expectInitials
);
