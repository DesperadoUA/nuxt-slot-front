<template>
  <div>
      <app_intro :value="data.body" />
      <app_casino_category :value="data.body" />
      <app_content :value="data.body.content"  />
  </div>
</template>

<script>
    import DAL_Page from '~/DAL/static_pages'
    import config from '~/config/index'
    import app_intro from '~/components/intro/app-intro'
    import app_content from '~/components/content/app-content'
    import app_casino_category from '~/components/casino-categories/app_casino_categories'
export default {
    name: "review-page",
    data: () => {
        return {
            data: null
        }
    },
    components: {app_intro, app_content, app_casino_category},
    async asyncData({store, route}) {
        const request = {
            url: 'reviews'
        }
        const response = await DAL_Page.getData(request)
        const body = response.data 
        const data = body
        data.body.currentUrl = config.BASE_URL + route.path
        return {data}
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
