<template>
  <div>
    <app_intro :value="data.body" />
    <app_category_link :value="data.body.category_link" />
    <app_slot_card :value="data.body.slots" />
    <app_content :value="data.body.content"  />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import app_content from '~/components/content/app-content'
    import app_intro from '~/components/intro/app-intro'
    import app_category_link from '~/components/category_link/app-category_link'
    import app_slot_card from '~/components/slot_loop_card/app_slot_loop_card'
    export default {
        name: "app-new-slots",
        components: {app_content, app_intro, app_category_link, app_slot_card},
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('category')
                                          .url('new-slots')
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