<template>
  <div>
    <app_intro :value="data.body" />
    <app_category_link :value="data.body.category_link" />
    <app_casino_loop_downloads :value="data.body.casino" />
    <AuthorLinkContainer 
        :link="config.AUTHOR_PAGE_LINK"
        :text="translates.REVIEW_AUTHOR[config.LANG]"
        :dataTime="data.body.create_at.slice(0, 10)"
        :name="data.body.author_name"
    />
    <app_content :value="data.body.content"  />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import app_intro from '~/components/intro/app-intro'
    import app_content from '~/components/content/app-content'
    import app_casino_loop_downloads from '~/components/casino_loop_downloads/app_casino_loop_downloads'
    import app_category_link from '~/components/category_link/app-category_link'
    import AuthorLinkContainer from '~/components/author/app-author-link-container'
    import head from '~/mixins/head'
    import translateMixin from '~/mixins/translate'
    import Helper from '~/helpers/helpers'
    export default {
        name: "popular-casino",
        data: () => {
            return {
                data: null
            }
        },
        components: {app_intro, app_content, app_casino_loop_downloads, app_category_link, AuthorLinkContainer},
        mixins: [head, translateMixin],
        async asyncData({store, route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('category')
                                          .url('popular-casino')
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

<style>

</style>
