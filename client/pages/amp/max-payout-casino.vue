<template>
  <div>
    <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
    <main class="main">
        <app_intro_amp :value="data.body" />
        <app_category_link_amp :value="data.body.category_link" />
        <app_casino_loop_downloads_amp :value="data.body.casino" />
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
    import app_casino_loop_downloads_amp from '~/components/casino_loop_downloads/app_casino_loop_downloads_amp'
    import app_category_link_amp from '~/components/category_link/app-category_link_amp'
    import AuthorLinkContainerAmp from '~/components/author/app-author-link-container_amp'
    import pageTemplateAmp from '~/mixins/pageTemplateAmp'
    import helper from '~/helpers/helpers'
    export default {
        name: "max-payout-casino_amp",
        data: () => {
            return {}
        },
        mixins: [pageTemplateAmp],
        components: {app_intro_amp, app_casino_loop_downloads_amp, app_category_link_amp, AuthorLinkContainerAmp},
        async asyncData({store, route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('category')
                                          .url('max-payout-casino')
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