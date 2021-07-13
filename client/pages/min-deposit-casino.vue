<template>
  <div>
    <app_intro :value="data.body" />
    <app_category_link :value="data.body.category_link" />
    <app_casino_loop_downloads :value="data.body.casino" />
    <app_content :value="data.body.content"  />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import app_intro from '~/components/intro/app-intro'
    import app_content from '~/components/content/app-content'
    import app_casino_loop_downloads from '~/components/casino_loop_downloads/app_casino_loop_downloads'
    import app_category_link from '~/components/category_link/app-category_link'
    export default {
        name: "min-deposit-casino",
        data: () => {
            return {
                data: null
            }
        },
        components: {app_intro, app_content, app_casino_loop_downloads, app_category_link},
        async asyncData({store, route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('category')
                                          .url('min-deposit-casino')
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

<style>

</style>