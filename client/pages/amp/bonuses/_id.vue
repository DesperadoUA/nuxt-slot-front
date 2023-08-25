<template>
  <div>
    <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
        <h1>Bonuses id</h1>
    <app_footer_amp 
        :footer_menu="data.body.settings.footer_menu"
        :footer_text="data.body.settings.footer_text"
    />
    <!--
    <app_intro :value="data.body" />
    <app_bonus_card :value="data.body.card" />
    <AuthorLinkContainer 
      :link="config.AUTHOR_PAGE_LINK"
      :text="translates.REVIEW_AUTHOR[config.LANG]"
      :dataTime="data.body.create_at.slice(0, 10)"
      :name="data.body.author_name"
    />
    <app_content :value="data.body.content"  />
    -->
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    //import app_content from '~/components/content/app-content'
    //import app_intro from '~/components/intro/app-intro'
    //import app_bonus_card from '~/components/bonus-card/app_bonus_card'
    //import AuthorLinkContainer from '~/components/author/app-author-link-container'
    import pageTemplateAmp from '~/mixins/pageTemplateAmp'
    import helper from '~/helpers/helpers'
    export default {
        name: "app_single_bonuses_amp",
        //components: {app_content, app_intro, app_bonus_card, AuthorLinkContainer},
        mixins: [pageTemplateAmp],
        data: () => {
            return {
               data: {},
            }
        },
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('bonuses')
                                          .url(route.params.id)
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