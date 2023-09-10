<template>
	<div>
		<app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
		<main class="main">
			<app_author_top_amp
				v-if="data.body.h1 !== ''"
				:img="data.body.thumbnail"
				:name="data.body.h1"
				:specialty="translates.AUTHOR_SPECIALIZATION[config.LANG]"
				:link="config.AUTHOR_FB_URL"
				:shortDesc="data.body.short_desc"
				:socialLinks="data.body.settings.social_links_author"
			/>
			<app_content_amp :value="data.body.amp_content" />
		</main>
		<app_footer_amp :footer_menu="data.body.settings.footer_menu" :footer_text="data.body.settings.footer_text" />
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import app_author_top_amp from '~/components/author/app-author-top_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import helper from '~/helpers/helpers'

export default {
	name: 'app-author_amp',
	components: { app_author_top_amp },
	mixins: [pageTemplateAmp],
	async asyncData({ route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('pages')
			.url('author')
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
