<template>
      <div>
        <app_intro :value="data.body" />
        <app_best_offer :value="data.body.bonuses" />
        <app_bonuses_loop :value="data.body.list" />
        <AuthorLinkContainer 
            :link="$options.authorPageLink"
            :text="$options.reviewAuthor"
            :dataTime="data.body.create_at.slice(0, 10)"
            :name="data.body.author_name"
        />
        <app_content :value="data.body.content"  />
      </div>
</template>

<script>
   import DAL_Builder from '~/DAL/builder'
   import app_intro from '~/components/intro/app-intro'
   import app_best_offer from '~/components/best-offer/app-best-offer'
   import app_bonuses_loop from '~/components/bonuses_loop_downloads/app_bonuses_loop_downloads'
   import app_content from '~/components/content/app-content'
   import AuthorLinkContainer from '~/components/author/app-author-link-container'
   import author from '~/mixins/author'
   import head from '~/mixins/head'
   import Helper from '~/helpers/helpers'
export default {
    name: "app_bonuses",
    data: () => {
        return {
            
        }
    },
    mixins: [head, author],
    components: {app_intro, app_best_offer, app_content, app_bonuses_loop, AuthorLinkContainer},
    async asyncData({store, route, error}) {
        const request = new DAL_Builder()
        const response = await request.postType('pages')
                                          .url('bonuses')
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
