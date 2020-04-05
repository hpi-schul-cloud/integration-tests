Then(/^he should see the git sha$/, async () => {
	const pageContent = await browserPage.content();
	await expect(pageContent).to.match(/"sha":\W*"[a-z0-9]{40}"/);
});
