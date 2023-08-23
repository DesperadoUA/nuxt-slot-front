<template>
  <div>
    <app_intro :value="data.body" />
    <app_bonus_card :value="data.body.card" />
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
    import app_content from '~/components/content/app-content'
    import app_intro from '~/components/intro/app-intro'
    import app_bonus_card from '~/components/bonus-card/app_bonus_card'
    import AuthorLinkContainer from '~/components/author/app-author-link-container'
    import translateMixin from '~/mixins/translate'
    import head from '~/mixins/head'
    import Helper from '~/helpers/helpers'
    export default {
        name: "app_single_casino",
        components: {app_content, app_intro, app_bonus_card, AuthorLinkContainer},
        mixins: [head, translateMixin],
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
                 const data = Helper.headDataMixin(response.data, route)
                 return {data}
              }
           }
    }
</script>