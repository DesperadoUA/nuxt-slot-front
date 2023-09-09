import translateMixin from '~/mixins/translate'
import app_header_amp from '~/components/header/app-header_amp'
import app_footer_amp from '~/components/footer/app-footer_amp'
import app_author_link_amp from '~/components/author/app-author-link_amp'
import app_content_amp from '~/components/content/app-content_amp'
export default {
	amp: 'hybrid',
	ampLayout: 'default.amp',
	mixins: [translateMixin],
	components: {
		app_author_link_amp,
		app_header_amp,
		app_footer_amp,
		app_content_amp
	},
	head() {
		return {
			title: this.data.body.meta_title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: this.data.body.description
				}
			],
			link: [{ rel: 'canonical', href: this.data.body.currentUrl }]
		}
	}
}
