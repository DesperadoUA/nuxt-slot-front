<template>
  <div>
    <app_intro :value="data.body" />
    <app_blog_downloads :value="data.body.blog" />
    <app_content :value="data.body.content"  />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import app_content from '~/components/content/app-content'
    import app_intro from '~/components/intro/app-intro'
    import app_blog_downloads from '~/components/blog_loop_downloads/app_blog_loop_downloads'
   
    export default {
        name: "app-blog",
        components: {app_content, app_intro, app_blog_downloads},
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('pages')
                                          .url('blog')
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