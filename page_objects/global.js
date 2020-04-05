const { CLIENT } = require('../shared-objects/servers');

const { doLogin, doFirstLogin } = require('./login');
module.exports = {
	doLogin: async (username, password) => {
		await browserPage.goto(`${CLIENT.URL}/login`);
		await doLogin(username, password || 'Schulcloud1!');
		await doFirstLogin();
	},
	doLogout: async () => {
		await browserPage.goto(`${CLIENT.URL}/logout`);
		expect(browserPage.url()).to.equal(`${CLIENT.URL}/`);
	},
};
