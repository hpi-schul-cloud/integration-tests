module.exports = {
	doLogin: async (username, password) => {
		const selectorUsername = 'input[name="username"]';
		const selectorPassword = 'input[name="password"]';
		const selectorSubmit = 'input[type="submit"]';

		await browserPage.type(selectorUsername, username);
		await browserPage.type(selectorPassword, password);
		await browserPage.click(selectorSubmit);
	},
	doFirstLogin: async () => {
		let morePages = true;
		let currentPage = 1;
		const nextStepSelector = '#nextSection';
		const uncheckedCheckboxSelector = 'input[type=checkbox]:not(:checked)';
		const discoverSCSelector = 'a[data-testid="btn_schul-cloud_erkunden"]';
		const currentPageSelector = () => `[data-panel="section-${currentPage}"]`;
		while (morePages) {
			while (
				await browserPage.$(
					`${currentPageSelector()} ${uncheckedCheckboxSelector}`
				)
			) {
				await browserPage.check(
					`${currentPageSelector()} ${uncheckedCheckboxSelector}`
				);
			}
			await browserPage.click(nextStepSelector);
			currentPage += 1;
			if (
				await browserPage.$(`${currentPageSelector()} ${discoverSCSelector}`)
			) {
				morePages = false;
			}
		}
		await browserPage.click(`${currentPageSelector()} ${discoverSCSelector}`);
	},
	expectInitials: async (initials) => {
		expect(browserPage.url()).to.include('/dashboard');
		expect(await browserPage.$eval('.initials', (e) => e.innerText)).to.equal(
			initials
		);
	},
};
