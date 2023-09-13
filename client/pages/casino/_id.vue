<template>
	<div>
		<app_intro :value="data.body" />
		<app_casino_card :value="data.body" />
		<app_close_disclaimer v-if="data.body.close === 1" :value="data.body.title" />
		<app_casino_loop :value="data.body.popular_casino" v-if="data.body.close === 1" />
		<app_casino_detail :value="data.body" />
		<app_casino_slots :value="data.body.slots" :title="data.body.title" />
		<AuthorLinkContainer
			:link="config.AUTHOR_PAGE_LINK"
			:text="translates.REVIEW_AUTHOR[config.LANG]"
			:dataTime="data.body.create_at.slice(0, 10)"
			:name="data.body.author_name"
		/>
		<app_content :value="data.body.content" />
		<app_faq :title="data.body.faq_title" :value="data.body.faq" />
		<app_slick_button :referal="data.body.ref"></app_slick_button>
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import app_content from '~/components/content/app-content'
import app_intro from '~/components/intro/app-intro'
import app_casino_card from '~/components/casino_card/app-casino-card'
import app_close_disclaimer from '~/components/close_disclaimer/close-disclaimer'
import app_casino_detail from '~/components/casino_detail/app-casino-detail'
import app_casino_slots from '~/components/casino_slots/app-casino-slots'
import app_casino_loop from '~/components/casino_loop/app_casino_loop_downloads'
import app_faq from '~/components/faq/app_faq'
import app_slick_button from '~/components/slick_button/app_slick_button'
import AuthorLinkContainer from '~/components/author/app-author-link-container'
import translateMixin from '~/mixins/translate'
import head from '~/mixins/head'
import Helper from '~/helpers/helpers'
export default {
	name: 'app_single_casino',
	components: {
		app_content,
		app_intro,
		app_casino_card,
		app_casino_detail,
		app_casino_slots,
		app_faq,
		app_close_disclaimer,
		app_casino_loop,
		app_slick_button,
		AuthorLinkContainer
	},
	data: () => {
		return {
			data: {}
		}
	},
	mixins: [head, translateMixin],
	async asyncData({ route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('casino')
			.url(route.params.id)
			.get()
		if (response.data.confirm === 'error') {
			error({ statusCode: 404, message: 'Post not found' })
		} else {
			const data = Helper.headDataMixin(response.data, route)
			return { data }
		}
	}
}
</script>

<style scoped></style>
