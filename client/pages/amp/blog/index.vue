<template>
	<div>
		<app_header_amp
			:logo="data.body.options.logo"
			:menu_links="data.body.settings.header_menu"
		/>
		<main class="main">
			<app_intro_amp :value="data.body" />
			<app_blog_downloads_amp :value="data.body.blog" />
		</main>
		<app_footer_amp
			:footer_menu="data.body.settings.footer_menu"
			:footer_text="data.body.settings.footer_text"
		/>
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import helper from '~/helpers/helpers'
import app_intro_amp from '~/components/intro/app-intro_amp'
import app_blog_downloads_amp from '~/components/blog_loop_downloads/app_blog_loop_downloads_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
export default {
	name: 'app-blog_amp',
	components: { app_intro_amp, app_blog_downloads_amp },
	mixins: [pageTemplateAmp],
	async asyncData({ route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('pages')
			.url('blog')
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
