<template>
	<div>
		<app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
		<main class="main">
			<app_intro_amp :value="data.body" />
			<AuthorLinkContainerAmp
				:link="config.AUTHOR_PAGE_LINK"
				:text="translates.REVIEW_AUTHOR[config.LANG]"
				:dataTime="data.body.create_at.slice(0, 10)"
				:name="data.body.author_name"
				variant="transparent"
				align="contentEnd"
			/>
			<app_vendor_card_amp :value="data.body" />
			<app_heading_amp
				v-if="data.body.casino.length !== 0"
				:value="{
					title: translates.CASINOS_WITH[config.LANG] + ' ' + data.body.title,
					permalink: '/reviews',
					title_permalink: translates.ALL_CASINO[config.LANG]
				}"
			/>
			<app_vendor_casino_amp :value="data.body.casino" />
			<app_heading_amp
				v-if="data.body.slots.length !== 0"
				:value="{
					title: translates.GAMES[config.LANG] + ' ' + data.body.title,
					permalink: '',
					title_permalink: ''
				}"
			/>
			<script_amp :src="GamePathScript" v-if="GameNumberPostOnQuery < data.body.slots.length">
				<app_slot_loop_card_amp :value="data.body.slots" post_type="vendor" :post_url="$route.params.id" />
			</script_amp>
			<app_slot_loop_card_amp
				:value="data.body.slots"
				post_type="vendor"
				:post_url="$route.params.id"
				v-if="data.body.slots.length !== 0 && GameNumberPostOnQuery > data.body.slots.length"
			/>
		</main>
		<app_footer_amp :footer_menu="data.body.settings.footer_menu" :footer_text="data.body.settings.footer_text" />
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import app_intro_amp from '~/components/intro/app-intro_amp'
import app_vendor_card_amp from '~/components/vendor_card/app_vendor_card_amp'
import app_vendor_casino_amp from '~/components/vendor_casino/app_vendor_casino_amp'
import app_slot_loop_card_amp from '~/components/slot_loop_card/app_slot_loop_card_amp'
import app_heading_amp from '~/components/section-heading/app-section-heading_amp'
import AuthorLinkContainerAmp from '~/components/author/app-author-link-container_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import helper from '~/helpers/helpers'
import script_amp from '~/components/script_amp'
import { GAME as GameNumberPostOnQuery } from '~/config/postLoader'
import { GAME as GamePathScript } from '~/config/ampPathScript'
export default {
	name: 'app_single_vendor_amp',
	components: {
		app_intro_amp,
		AuthorLinkContainerAmp,
		app_vendor_card_amp,
		app_heading_amp,
		app_vendor_casino_amp,
		app_slot_loop_card_amp,
		script_amp
	},
	mixins: [pageTemplateAmp],
	data: () => {
		return {
			GameNumberPostOnQuery,
			GamePathScript
		}
	},
	async asyncData({ route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('vendors')
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
