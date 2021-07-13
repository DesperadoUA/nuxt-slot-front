<template>
  <div>
    <app_intro :value="data.body" />
    <app_casino_card :value="data.body" />
    <app_casino_detail :value="data.body" />
    <app_casino_slots :value="data.body.slots" :title="data.body.title" />
    <app_content :value="data.body.content"  />
    <app_faq :title="data.body.faq_title"
             :value="data.body.faq" />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import app_content from '~/components/content/app-content'
    import app_intro from '~/components/intro/app-intro'
    import app_casino_card from '~/components/casino_card/app-casino-card'
    import app_casino_detail from '~/components/casino-detail/app-casino-detail'
    import app_casino_slots from '~/components/casino-slots/app-casino-slots'
    import app_faq from '~/components/faq/app_faq'
    export default {
        name: "app_single_casino",
        components: {app_content, app_intro, app_casino_card, app_casino_detail, app_casino_slots, app_faq},
        data: () => {
            return {
               data: {},
            }
        },
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('casino')
                                          .url(route.params.id)
                                          .get()
             if(response.data.confirm === 'error') {
                 error({ statusCode: 404, message: 'Post not found' })
             }
             else {
                 const body = response.data.body
                 const data = {body}
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