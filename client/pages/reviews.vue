<template>
  <div>
      <app_intro :value="data.body" />
      <app_casino_category :value="data.body" />
      <app_content :value="data.body.content"  />
  </div>
</template>

<script>
    import DAL_Page from '~/DAL/static_pages'
    import app_intro from '~/components/intro/app-intro'
    import app_content from '~/components/content/app-content'
    import app_casino_category from '~/components/casino-categories/app_casino_categories'
    import head from '~/mixins/head'
    import Helper from '~/helpers/helpers'
export default {
    name: "review-page",
    data: () => {
        return {
            data: null
        }
    },
    components: {app_intro, app_content, app_casino_category},
    mixins: [head],
    async asyncData({store, route}) {
        const request = {
            url: 'reviews'
        }
        const response = await DAL_Page.getData(request)
        const data = Helper.headDataMixin(response.data, route)
        return {data}
    }
}
</script>

<style>

</style>
