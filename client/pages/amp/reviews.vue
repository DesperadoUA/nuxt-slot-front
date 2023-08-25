<template>
  <div>
    <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
        <h1>reviews</h1>
    <!--
      <app_intro :value="data.body" />
      <app_casino_category :value="data.body" />
      <app_content :value="data.body.content"  />
    -->
    <app_footer_amp 
        :footer_menu="data.body.settings.footer_menu"
        :footer_text="data.body.settings.footer_text"
    />
  </div>
</template>

<script>
    import DAL_Page from '~/DAL/static_pages'
    //import app_intro from '~/components/intro/app-intro'
    //import app_content from '~/components/content/app-content'
    //import app_casino_category from '~/components/casino-categories/app_casino_categories'
    import pageTemplateAmp from '~/mixins/pageTemplateAmp'
    import helper from '~/helpers/helpers'
export default {
    name: "review-page_amp",
    data: () => {
        return {
            data: null
        }
    },
    //components: {app_intro, app_content, app_casino_category},
    mixins: [pageTemplateAmp],
    async asyncData({store, route}) {
        const request = {
            url: 'reviews'
        }
        const response = await DAL_Page.getData(request)
        const data = await helper.globalDataMixin(response, route)
        return {data}
    }
}
</script>
