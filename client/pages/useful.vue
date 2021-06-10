<template>
  <div>
    <app_intro :value="data.body" />
    <app_useful :value="data.body" />
    <app_content :value="data.body.content"  />
  </div>
</template>

<script>
    import DAL_Builder from '../DAL/builder'
    import app_content from '../components/content/app-content'
    import app_useful from '../components/useful/app_useful'
    import app_intro from '../components/intro/app-intro'
    export default {
        name: "app-useful",
        components: {app_content, app_intro, app_useful},
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('pages')
                                          .url('useful')
                                          .get()
            if(response.data.status === '404') {
                error({ statusCode: 404, message: 'Post not found' })
            }
            else {
                const body = response.data.body
                const data = {body}
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