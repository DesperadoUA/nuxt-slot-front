<template>
	<div>
		<app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
		<main class="main">
			<app_intro_amp :value="data.body" />
			<script_amp :src="NewsPathScript" v-if="NewsNumberPostOnQuery < data.body.news.length">
				<app_news_loop_amp :value="data.body.news" />
			</script_amp>
			<app_news_loop_amp
				:value="data.body.news"
				v-if="data.body.news.length !== 0 && NewsNumberPostOnQuery > data.body.news.length"
			/>
			<app_content_amp :value="data.body.amp_content" />
		</main>
		<app_footer_amp :footer_menu="data.body.settings.footer_menu" :footer_text="data.body.settings.footer_text" />
	</div>
</template>

<script>
import DAL_Builder from '~/DAL/builder'
import app_intro_amp from '~/components/intro/app-intro_amp'
import app_news_loop_amp from '~/components/news_loop/app_news_loop_amp'
import pageTemplateAmp from '~/mixins/pageTemplateAmp'
import helper from '~/helpers/helpers'
import script_amp from '~/components/script_amp'
import { NEWS as NewsNumberPostOnQuery } from '~/config/postLoader'
import { NEWS as NewsPathScript } from '~/config/ampPathScript'
export default {
	name: 'index_news_amp',
	components: { app_intro_amp, app_news_loop_amp, script_amp },
	data: () => {
		return {
			NewsNumberPostOnQuery,
			NewsPathScript
		}
	},
	mixins: [pageTemplateAmp],
	async asyncData({ route, error }) {
		const request = new DAL_Builder()
		const response = await request
			.postType('pages')
			.url('news')
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
