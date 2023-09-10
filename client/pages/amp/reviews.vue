<template>
	<div>
		<app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
		<main class="main">
			<app_intro_amp :value="data.body" />
			<app_casino_category_amp :value="data.body" />
			<app_content_amp :value="data.body.amp_content" />
		</main>
		<app_footer_amp :footer_menu="data.body.settings.footer_menu" :footer_text="data.body.settings.footer_text" />
	</div>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import app_intro_amp from '~/components/intro/app-intro_amp'
import app_casino_category_amp from '~/components/casino-categories/app_casino_categories_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import helper from '~/helpers/helpers'
export default {
	name: 'review-page_amp',
	data: () => {
		return {
			data: null
		}
	},
	components: { app_intro_amp, app_casino_category_amp },
	mixins: [pageTemplateAmp],
	async asyncData({ store, route }) {
		const request = {
			url: 'reviews'
		}
		const response = await DAL_Page.getData(request)
		const data = await helper.globalDataMixin(response, route)
		return { data }
	}
}
</script>
