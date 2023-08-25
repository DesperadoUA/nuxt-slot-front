<template>
  <div>
    <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
        <h1>Payments</h1>
    <app_footer_amp 
        :footer_menu="data.body.settings.footer_menu"
        :footer_text="data.body.settings.footer_text"
    />
    <!--
    <app_intro :value="data.body" />
    <AuthorLinkContainer 
        :link="config.AUTHOR_PAGE_LINK"
        :text="translates.REVIEW_AUTHOR[config.LANG]"
        :dataTime="data.body.create_at.slice(0, 10)"
        :name="data.body.author_name"
        variant="transparent"
        align="contentEnd"
    />
    <app_payment_card :value="data.body" />
    <app_heading :value="{
                          title: translates.CASINOS_WITH[config.LANG] + ' ' + data.body.title,
                          permalink:'', 
                          title_permalink: ''
                        }" />
    <app_casino_loop :value="data.body.casino" />
    <app_content :value="data.body.content" />
    -->
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder' 
    //import app_intro from '~/components/intro/app-intro'
    //import app_casino_loop from '~/components/casino_loop_downloads/app_casino_loop_downloads'
    //import app_heading from '~/components/section-heading/app-section-heading'
    //import app_content from '~/components/content/app-content'
    //import app_payment_card from '~/components/payment_card/app_payment_card'
    //import AuthorLinkContainer from '~/components/author/app-author-link-container'
    import pageTemplateAmp from '~/mixins/pageTemplateAmp'
    import helper from '~/helpers/helpers'
    export default {
        name: "app_single_payment_amp",
        //components: {app_intro, app_heading, app_casino_loop, app_content, app_payment_card, AuthorLinkContainer},
        mixins: [pageTemplateAmp],
        data: () => {
            return {
                data: {},
            }
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