<template>
  <div>
    <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
        <h1>useful</h1>
    <!--
    <app_intro :value="data.body" />
    <app_useful :value="data.body" />
    <app_content :value="data.body.content"  />
    -->
     <app_footer_amp 
        :footer_menu="data.body.settings.footer_menu"
        :footer_text="data.body.settings.footer_text"
    />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    //import app_content from '~/components/content/app-content'
    //import app_useful from '~/components/useful/app_useful'
    //import app_intro from '~/components/intro/app-intro'
    import pageTemplateAmp from '~/mixins/pageTemplateAmp'
    import helper from '~/helpers/helpers'
    export default {
        name: "app-useful_amp",
        // components: {app_content, app_intro, app_useful},
        mixins: [pageTemplateAmp],
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('pages')
                                          .url('useful')
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