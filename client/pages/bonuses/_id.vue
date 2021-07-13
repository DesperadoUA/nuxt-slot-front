<template>
  <div>
    <app_intro :value="data.body" />
    <app_bonus_card :value="data.body.card" />
    <app_content :value="data.body.content"  />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import app_content from '~/components/content/app-content'
    import app_intro from '~/components/intro/app-intro'
    import app_bonus_card from '~/components/bonus-card/app_bonus_card'
    export default {
        name: "app_single_casino",
        components: {app_content, app_intro, app_bonus_card},
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