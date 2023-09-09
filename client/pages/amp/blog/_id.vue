<template>
	<div class="blog-single">
		<app_header_amp
			:logo="data.body.options.logo"
			:menu_links="data.body.settings.header_menu"
		/>
		<div class="container blog-single__container">
			<app_blog_single_amp :value="data.body">
				<template v-slot>
					<app_author_link_amp
						:link="config.AUTHOR_PAGE_LINK"
						:text="translates.REVIEW_AUTHOR[config.LANG]"
						:dataTime="data.body.create_at.slice(0, 10)"
						:name="data.body.author_name"
					/>
				</template>
			</app_blog_single_amp>
			<app_last_article_amp
				:title="translates.LAST_ARTICLE[config.LANG]"
				:value="data.body.posts"
			/>
		</div>
		<app_footer_amp
			:footer_menu="data.body.settings.footer_menu"
			:footer_text="data.body.settings.footer_text"
		/>
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import helper from '~/helpers/helpers'
import app_blog_single_amp from '~/components/blog_single/app_blog_single_amp'
import app_last_article_amp from '~/components/last_article/app_last_article_amp'
import app_author_link_amp from '~/components/author/app-author-link_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
export default {
	name: 'app_single_blog_amp',
	components: {
		app_blog_single_amp,
		app_last_article_amp,
		app_author_link_amp
	},
	mixins: [pageTemplateAmp],
	data: () => {
		return {
			data: {}
		}
	},
	async asyncData({ route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('blog')
			.url(route.params.id)
			.get()
		if (response.data.confirm === 'error') {
			error({ statusCode: 404, message: 'Post not found' })
		} else {
			const body = response.data.body
			let settings = {
				url: process.env.BASE_URL + route.path,
				title: body.title,
				short_desc: body.short_desc,
				thumbnail: body.thumbnail
			}
			const data = await helper.globalDataMixin(response, route)
			data.body.sharedFB = helper.sharedFB(settings)
			data.body.sharedTwitter = helper.sharedTwitter(settings)
			data.body.sharedVK = helper.sharedVK(settings)
			return { data }
		}
	},
	methods: {
		sharedFB() {
			return 'Shared fb'
		}
	}
}
</script>
