<template>
	<div>
		<app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
		<main class="main">
			<app_intro_amp :value="data.body" />
			<app_best_offer_amp :value="data.body.bonuses" />
			<script_amp :src="BonusPathScript" v-if="BonusNumberPostOnQuery < data.body.list.length">
				<app_bonuses_loop_amp :value="data.body.list" />
			</script_amp>
			<app_bonuses_loop_amp
				:value="data.body.list"
				v-if="data.body.list.length !== 0 && BonusNumberPostOnQuery > data.body.list.length"
			/>
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
import DAL_Builder from '~/DAL/builder'
import app_intro_amp from '~/components/intro/app-intro_amp'
import app_best_offer_amp from '~/components/best-offer/app-best-offer_amp'
import app_bonuses_loop_amp from '~/components/bonuses_loop_downloads/app_bonuses_loop_downloads_amp'
import AuthorLinkContainerAmp from '~/components/author/app-author-link-container_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import helper from '~/helpers/helpers'
import script_amp from '~/components/script_amp'
import { BONUS as BonusNumberPostOnQuery } from '~/config/postLoader'
import { BONUS as BonusPathScript } from '~/config/ampPathScript'
export default {
	name: 'app_bonuses_amp',
	data: () => {
		return {}
	},
	data: () => {
		return {
			BonusNumberPostOnQuery,
			BonusPathScript
		}
	},
	mixins: [pageTemplateAmp],
	components: {
		app_intro_amp,
		app_best_offer_amp,
		app_bonuses_loop_amp,
		AuthorLinkContainerAmp,
		script_amp
	},
	async asyncData({ store, route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('pages')
			.url('bonuses')
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
