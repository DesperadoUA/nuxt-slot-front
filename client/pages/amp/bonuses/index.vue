<template>
      <div>
        <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
            <h1>Bonuses</h1>
        <app_footer_amp 
            :footer_menu="data.body.settings.footer_menu"
            :footer_text="data.body.settings.footer_text"
        />
        <!--
        <app_intro :value="data.body" />
        <app_best_offer :value="data.body.bonuses" />
        <app_bonuses_loop :value="data.body.list" />
        <AuthorLinkContainer 
            :link="config.AUTHOR_PAGE_LINK"
            :text="translates.REVIEW_AUTHOR[config.LANG]"
            :dataTime="data.body.create_at.slice(0, 10)"
            :name="data.body.author_name"
        />
        <app_content :value="data.body.content"  />-->
      </div>
</template>

<script>
   import DAL_Builder from '~/DAL/builder'
   //import app_intro from '~/components/intro/app-intro'
   //import app_best_offer from '~/components/best-offer/app-best-offer'
   //import app_bonuses_loop from '~/components/bonuses_loop_downloads/app_bonuses_loop_downloads'
   //import app_content from '~/components/content/app-content'
   //import AuthorLinkContainer from '~/components/author/app-author-link-container'
   import pageTemplateAmp from '~/mixins/pageTemplateAmp'
   import helper from '~/helpers/helpers'
export default {
    name: "app_bonuses_amp",
    data: () => {
        return {}
    },
    mixins: [pageTemplateAmp],
    //components: {app_intro, app_best_offer, app_content, app_bonuses_loop, AuthorLinkContainer},
    async asyncData({store, route, error}) {
        const request = new DAL_Builder()
        const response = await request.postType('pages')
                                          .url('bonuses')
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
