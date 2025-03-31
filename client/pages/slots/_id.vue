<template>
	<div>
		<app_intro :value="data.body" />
		<app_slot_card :value="data.body" />
		<app_slot_detail :value="data.body" />
		<app_heading
			:value="{
				title: translates.CASINO_WITH_GAME[config.LANG],
				permalink: '',
				title_permalink: ''
			}"
		/>
		<app_casino_loop :value="data.body.popular_casino" />
		<AuthorLinkContainer
			:link="config.AUTHOR_PAGE_LINK"
			:text="translates.REVIEW_AUTHOR[config.LANG]"
			:dataTime="data.body.create_at.slice(0, 10)"
			:name="data.body.author_name"
		/>
		<app_content :value="data.body.content" />
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import app_content from '~/components/content/app-content'
import app_intro from '~/components/intro/app-intro'
import app_slot_card from '~/components/slot_card/app_slot_card'
import app_slot_detail from '~/components/slot-detail/app-slot-detail'
import app_casino_loop from '~/components/casino_loop_downloads/app_casino_loop_downloads'
import app_heading from '~/components/section-heading/app-section-heading'
import AuthorLinkContainer from '~/components/author/app-author-link-container'
import translateMixin from '~/mixins/translate'
import head from '~/mixins/head'
import Helper from '~/helpers/helpers'
export default {
	name: 'app_single_slot',
	components: {
		app_slot_card,
		app_content,
		app_intro,
		app_slot_detail,
		app_casino_loop,
		app_heading,
		AuthorLinkContainer
	},
	mixins: [head, translateMixin],
	data: () => {
		return {
			data: {}
		}
	},
	async asyncData({ route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('slots')
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
