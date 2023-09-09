export default {
	head() {
		return {
			title: this.data.body.meta_title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.data.body.description
				},
				{
					name: 'robots',
					content: `${this.data.body.index_seo}, ${this.data.body.follow}`
				}
			],
			link: [{ rel: 'canonical', href: this.data.body.currentUrl }]
		}
	}
}
