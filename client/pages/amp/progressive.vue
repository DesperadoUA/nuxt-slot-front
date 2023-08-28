<template>
  <div>
    <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
    <main class="main">
        <app_intro_amp :value="data.body" />
        <app_category_link_amp :value="data.body.category_link" />
        <app_slot_card_amp :value="data.body.slots" />
        <AuthorLinkContainerAmp 
            :link="config.AUTHOR_PAGE_LINK"
            :text="translates.REVIEW_AUTHOR[config.LANG]"
            :dataTime="data.body.create_at.slice(0, 10)"
            :name="data.body.author_name"
        />
        <app_content_amp :value="data.body.amp_content" />
    </main>
    <app_footer_amp 
        :footer_menu="data.body.settings.footer_menu"
        :footer_text="data.body.settings.footer_text"
    />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import app_intro_amp from '~/components/intro/app-intro_amp'
    import app_category_link_amp from '~/components/category_link/app-category_link_amp'
    import app_slot_card_amp from '~/components/slot_loop_card/app_slot_loop_card_amp'
    import AuthorLinkContainerAmp from '~/components/author/app-author-link-container_amp'
    import pageTemplateAmp from '~/mixins/pageTemplateAmp'
    import helper from '~/helpers/helpers'
    export default {
        name: "app-progressive_amp",
        components: {app_intro_amp, app_category_link_amp, app_slot_card_amp, AuthorLinkContainerAmp},
        mixins: [pageTemplateAmp],
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('category')
                                          .url('progressive')
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