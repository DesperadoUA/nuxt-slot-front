<template>
	<div class="blog-single">
		<div class="container blog-single__container">
			<app_blog_single :value="data.body">
				<template v-slot>
					<app_author_link
						:link="config.AUTHOR_PAGE_LINK"
						:text="translates.REVIEW_AUTHOR[config.LANG]"
						:dataTime="data.body.create_at.slice(0, 10)"
						:name="data.body.author_name"
					/>
				</template>
			</app_blog_single>
			<app_last_article :title="translates.LAST_NEWS[config.LANG]" :value="data.body.posts" />
		</div>
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import Helper from '~/helpers/helpers'
import app_blog_single from '~/components/blog_single/app_blog_single'
import app_last_article from '~/components/last_article/app_last_article'
import app_author_link from '~/components/author/app-author-link'
import head from '~/mixins/head'
import translateMixin from '~/mixins/translate'
export default {
	name: 'app_news_single',
	components: { app_blog_single, app_last_article, app_author_link },
	mixins: [head, translateMixin],
	data: () => {
		return {
			data: {}
		}
	},
	async asyncData({ route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('news')
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
			const data = Helper.headDataMixin(response.data, route)
			data.body.sharedFB = Helper.sharedFB(settings)
			data.body.sharedTwitter = Helper.sharedTwitter(settings)
			data.body.sharedVK = Helper.sharedVK(settings)
			return { data }
		}
	}
}
</script>

<style scoped lang="scss">
.blog-single {
	--last-article-width: 26.4%;
	background-color: var(--theme-bg-1);
	overflow: hidden;

	.main > &:first-child {
		margin-top: -53px;
	}

	.cms {
		padding-top: 0;
	}
}

.blog-single__container {
	@media (min-width: 992px) {
		display: flex;
		position: relative;

		&:after {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			pointer-events: none;
			left: calc(100% - var(--side-gutters) - 2px);
			width: 9999px;
			background-color: #fff;
		}
	}
}
</style>
