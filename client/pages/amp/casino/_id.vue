<template>
	<div>
		<app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
		<main class="main">
			<app_intro_amp :value="data.body" />
			<app_casino_card_amp :value="data.body" />
			<app_close_disclaimer_amp v-if="data.body.close === 1" :value="data.body.title" />
			<app_casino_loop_amp :value="data.body.popular_casino" v-if="data.body.close === 1" />
			<app_casino_detail_amp :value="data.body" />
			<app_casino_slots_amp :value="data.body.slots" :title="data.body.title" />
			<AuthorLinkContainerAmp
				:link="config.AUTHOR_PAGE_LINK"
				:text="translates.REVIEW_AUTHOR[config.LANG]"
				:dataTime="data.body.create_at.slice(0, 10)"
				:name="data.body.author_name"
			/>
			<app_content_amp :value="data.body.amp_content" />
			<app_faq_amp :title="data.body.faq_title" :value="data.body.faq" />
			<app_slick_button_amp :referal="data.body.ref" />
		</main>
		<app_footer_amp :footer_menu="data.body.settings.footer_menu" :footer_text="data.body.settings.footer_text" />
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import app_intro_amp from '~/components/intro/app-intro_amp'
import app_casino_card_amp from '~/components/casino_card/app-casino-card_amp'
import app_close_disclaimer_amp from '~/components/close_disclaimer/close-disclaimer_amp'
import app_casino_detail_amp from '~/components/casino_detail/app-casino-detail_amp'
import app_casino_slots_amp from '~/components/casino_slots/app-casino-slots_amp'
import app_casino_loop_amp from '~/components/casino_loop/app_casino_loop_downloads_amp'
import app_faq_amp from '~/components/faq/app_faq_amp'
import app_slick_button_amp from '~/components/slick_button/app_slick_button_amp'
import AuthorLinkContainerAmp from '~/components/author/app-author-link-container_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import helper from '~/helpers/helpers'
export default {
	name: 'app_single_casino_amp',
	components: {
		app_intro_amp,
		app_casino_card_amp,
		app_close_disclaimer_amp,
		app_casino_detail_amp,
		app_casino_loop_amp,
		app_casino_slots_amp,
		AuthorLinkContainerAmp,
		app_faq_amp,
		app_slick_button_amp
	},
	data: () => {
		return {
			data: {}
		}
	},
	mixins: [pageTemplateAmp],
	async asyncData({ route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('casino')
			.url(route.params.id)
			.get()
		if (response.data.confirm === 'error') {
			error({ statusCode: 404, message: 'Post not found' })
		} else {
			const data = await helper.globalDataMixin(response, route)
			return { data }
		}
	}
}
</script>
