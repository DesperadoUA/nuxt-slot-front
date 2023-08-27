<template>
  <div>
    <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
    <main class="main">
        <app_intro_amp :value="data.body" />
        <AuthorLinkContainerAmp 
            :link="config.AUTHOR_PAGE_LINK"
            :text="translates.REVIEW_AUTHOR[config.LANG]"
            :dataTime="data.body.create_at.slice(0, 10)"
            :name="data.body.author_name"
            variant="transparent"
            align="contentEnd"
        />
        <app_payment_card_amp :value="data.body" />
        <app_heading_amp :value="{
            title: translates.CASINOS_WITH[config.LANG] + ' ' + data.body.title,
            permalink:'', 
            title_permalink: ''
        }" />
        <app_casino_loop_amp :value="data.body.casino" />
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
    import app_casino_loop_amp from '~/components/casino_loop_downloads/app_casino_loop_downloads_amp'
    import app_heading_amp from '~/components/section-heading/app-section-heading_amp'
    import app_payment_card_amp from '~/components/payment_card/app_payment_card_amp'
    import AuthorLinkContainerAmp from '~/components/author/app-author-link-container_amp'
    import pageTemplateAmp from '~/mixins/pageTemplateAmp'
    import helper from '~/helpers/helpers'
    export default {
        name: "app_single_payment_amp",
        components: {app_intro_amp, AuthorLinkContainerAmp, app_payment_card_amp, app_heading_amp, app_casino_loop_amp},
        mixins: [pageTemplateAmp],
        data: () => {
            return {}
        },
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('payments')
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