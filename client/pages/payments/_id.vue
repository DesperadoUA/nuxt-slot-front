<template>
  <div>
    <app_intro :value="data.body" />
    <app_payment_card :value="data.body" />
    <app_heading :value="{
                          title: data.translate.casinosWith + data.body.title,
                          permalink:'', 
                          title_permalink: ''
                        }" />
    <app_casino_loop :value="data.body.casino" />
    <app_content :value="data.body.content" />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import TRANSLATE from '~/helpers/translate'
    import app_intro from '~/components/intro/app-intro'
    import app_casino_loop from '~/components/casino_loop_downloads/app_casino_loop_downloads'
    import app_heading from '~/components/section-heading/app-section-heading'
    import app_content from '~/components/content/app-content'
    import app_payment_card from '~/components/payment_card/app_payment_card'
    export default {
        name: "app_single_payment",
        components: {app_intro, app_heading, app_casino_loop, app_content, app_payment_card},
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
                const body = response.data.body
                const data = {body}
                data.translate = {
                    casinosWith: `${TRANSLATE.CASINOS_WITH.uk} `,
                }
                data.body.currentUrl = config.BASE_URL + route.path
                return {data}
            }
        },
        head() {
            return {
                title: this.data.body.meta_title,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.data.body.description
                    },
                ],
                link: [
                    { rel: 'canonical', href: this.data.body.currentUrl}
                ]
            }
        }
    }
</script>

<style scoped>

</style>