<template>
	<div>
		<app_intro :value="data.body" />
		<app_blog_downloads :value="data.body.news" />
		<app_content :value="data.body.content" />
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import app_content from '~/components/content/app-content'
import app_intro from '~/components/intro/app-intro'
import app_blog_downloads from '~/components/blog_loop_downloads/app_blog_loop_downloads'
import head from '~/mixins/head'
import Helper from '~/helpers/helpers'
export default {
	name: 'app-blog',
	components: { app_content, app_intro, app_blog_downloads },
	mixins: [head],
	async asyncData({ route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('pages')
			.url('interview')
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
