const { CLIENT } = require('../shared-objects/servers');

When(
	/^the user creates a news "(.*)" "(.*)" "(.*)"$/,
	async (title, description, publishDate) => {
		await browserPage.goto(`${CLIENT.URL}/news/new`);
		await browserPage.type(`data-testid="news_title"`, title);
		await browserPage.type(`.editor [contenteditable="true"]`, description);
		// await browserPage.evaluate((date) => {
		// 	document.querySelector('input[data-testid="news_date"]').value = date;
		// }, publishDate); // does not work :/
		await Promise.all([
			browserPage.click(`button[data-testid="btn_news_submit"]`),
			browserPage.waitForNavigation(),
		]);
	}
);
