<template>
  <div>
    <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
        <h1>News</h1>
    <app_footer_amp 
        :footer_menu="data.body.settings.footer_menu"
        :footer_text="data.body.settings.footer_text"
    />
    <!--
    <app_intro :value="data.body" />
    <app_news_loop :value="data.body.news" />
    <app_content :value="data.body.content"  />
    -->
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    //import app_content from '~/components/content/app-content'
    //import app_intro from '~/components/intro/app-intro'
    //import app_news_loop from '~/components/news_loop/app_news_loop'
    import pageTemplateAmp from '~/mixins/pageTemplateAmp'
    import helper from '~/helpers/helpers'
    export default {
        name: "index_news_amp",
        //components: {app_content, app_intro, app_news_loop},
        mixins: [pageTemplateAmp],
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('pages')
                .url('news')
                .get()
            if(response.data.confirm === 'error') {
                error({ statusCode: 404, message: 'Post not found' })
            }
            else {
                const data = await helper.globalDataMixin(response, route)
                return {data}
            }
        }
    }
</script>