<template>
  <div>
    <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
        <h1>Blog</h1>
    <app_footer_amp 
        :footer_menu="data.body.settings.footer_menu"
        :footer_text="data.body.settings.footer_text"
    />
    <!--
    <app_intro :value="data.body" />
    <app_blog_downloads :value="data.body.blog" />
    <app_content :value="data.body.content"  />
    -->
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import helper from '~/helpers/helpers'
    //import app_content from '~/components/content/app-content'
    //import app_intro from '~/components/intro/app-intro'
    //import app_blog_downloads from '~/components/blog_loop_downloads/app_blog_loop_downloads'
    import pageTemplateAmp from '~/mixins/pageTemplateAmp'
    export default {
        name: "app-blog_amp",
        //components: {app_content, app_intro, app_blog_downloads},
        mixins: [pageTemplateAmp],
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('pages')
                                          .url('blog')
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