<template>
  <div>
    <app_intro :value="data.body" />
    <app_news_loop :value="data.body.news" />
    <app_content :value="data.body.content"  />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import app_content from '~/components/content/app-content'
    import app_intro from '~/components/intro/app-intro'
    import app_news_loop from '~/components/news_loop/app_news_loop'
    import head from '~/mixins/head'
    import Helper from '~/helpers/helpers'
    export default {
        name: "index_news",
        components: {app_content, app_intro, app_news_loop},
        mixins: [head],
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('pages')
                .url('news')
                .get()
            if(response.data.confirm === 'error') {
                error({ statusCode: 404, message: 'Post not found' })
            }
            else {
                const data = Helper.headDataMixin(response.data, route)
                return {data}
            }
        }
    }
</script>

<style scoped>

</style>