<template>
	<div>
		<app_intro :value="data.body" />
		<app_category_link :value="data.body.category_link" />
		<app_slot_card :value="data.body.slots" />
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
import app_category_link from '~/components/category_link/app-category_link'
import app_slot_card from '~/components/slot_loop_card/app_slot_loop_card'
import AuthorLinkContainer from '~/components/author/app-author-link-container'
import head from '~/mixins/head'
import translateMixin from '~/mixins/translate'
import Helper from '~/helpers/helpers'
export default {
	name: 'app-best-for-payout',
	components: {
		app_content,
		app_intro,
		app_category_link,
		app_slot_card,
		AuthorLinkContainer
	},
	mixins: [head, translateMixin],
	async asyncData({ route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('category')
			.url('best-for-payout')
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
