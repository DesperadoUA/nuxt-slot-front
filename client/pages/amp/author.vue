<template>
  <div>
     <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
        <h1>AUthor</h1>
    <!--
    <app_author_top v-if="data.body.h1 !== ''"
        :img="data.body.thumbnail"
        :name="data.body.h1"
        :specialty="translates.AUTHOR_SPECIALIZATION[config.LANG]"
        :link="config.AUTHOR_FB_URL"
        :shortDesc="data.body.short_desc"
        :socialLinks="authorSocialLinks"
    />
    <app_content :value="data.body.content"  />-->
    <app_footer_amp 
           :footer_menu="data.body.settings.footer_menu"
           :footer_text="data.body.settings.footer_text"
        />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import app_content from '~/components/content/app-content'
    import app_author_top from '~/components/author/app-author-top'
    import pageTemplateAmp from '~/mixins/pageTemplateAmp'
    import helper from '~/helpers/helpers'

    export default {
        name: "app-author_amp",
        components: {app_content, app_author_top},
        mixins: [pageTemplateAmp],
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('pages')
                                          .url('author')
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