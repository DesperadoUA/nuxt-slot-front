<template>
	<div>
		<app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
		<main class="main">
			<app_intro_amp :value="data.body" />
			<app_best_offer_amp :value="data.body.bonuses" />
			<app_category_link_amp :value="data.body.category_link" />
			<script_amp :src="CasinoPathScript" v-if="CasinoNumberPostOnQuery < data.body.casino.length">
				<app_casino_loop_downloads_amp :value="data.body.casino" post_type="page" post_url="/" />
			</script_amp>
			<app_casino_loop_downloads_amp
				:value="data.body.casino"
				post_type="page"
				post_url="/"
				v-if="data.body.casino.length !== 0 && CasinoNumberPostOnQuery > data.body.casino.length"
			/>
			<app_new_casino_amp :value="data.body.new_casino" />
			<app_popular_slots_amp :value="data.body.popular_slots" />
			<app_popular_offers_amp :value="data.body.popular_bonus" />
			<AuthorLinkContainerAmp
				:link="config.AUTHOR_PAGE_LINK"
				:text="translates.REVIEW_AUTHOR[config.LANG]"
				:dataTime="data.body.create_at.slice(0, 10)"
				:name="data.body.author_name"
			/>
			<app_content_amp :value="data.body.amp_content" />
		</main>
		<app_footer_amp :footer_menu="data.body.settings.footer_menu" :footer_text="data.body.settings.footer_text" />
	</div>
</template>

<script>
import DAL_Page from '~/DAL/static_pages'
import app_intro_amp from '~/components/intro/app-intro_amp'
import app_best_offer_amp from '~/components/best_offer/app-best-offer_amp'
import app_category_link_amp from '~/components/category_link/app-category_link_amp'
import app_casino_loop_downloads_amp from '~/components/casino_loop/app_casino_loop_downloads_amp'
import app_new_casino_amp from '~/components/new_casino/app-new_casino_amp'
import app_popular_slots_amp from '~/components/popular_slots/app-popular_slots_amp'
import app_popular_offers_amp from '~/components/popular_offers/app_popular_offers_amp'
import AuthorLinkContainerAmp from '~/components/author/app-author-link-container_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import helper from '~/helpers/helpers'
import script_amp from '~/components/script_amp'
import { CASINO as CasinoNumberPostOnQuery } from '~/config/postLoader'
import { CASINO as CasinoPathScript } from '~/config/ampPathScript'
export default {
	name: 'main-page_amp',
	data: () => {
		return {
			data: {},
			CasinoNumberPostOnQuery,
			CasinoPathScript
		}
	},
	mixins: [pageTemplateAmp],
	components: {
		app_intro_amp,
		app_best_offer_amp,
		app_category_link_amp,
		app_casino_loop_downloads_amp,
		app_new_casino_amp,
		app_popular_slots_amp,
		app_popular_offers_amp,
		AuthorLinkContainerAmp,
		script_amp
	},
	async asyncData({ store, route }) {
		const request = {
			url: 'main'
		}
		const response = await DAL_Page.getData(request)
		const data = await helper.globalDataMixin(response, route)
		return { data }
	}
}
</script>
