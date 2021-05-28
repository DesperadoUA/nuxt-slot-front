<template>
  <div>
      <app_intro :value="data.body" />
      <app_content :value="data.body.content"/>
  </div>
</template>

<script>
    import DAL_Page from '../DAL/static_pages'
    import app_intro from '../components/intro/app-intro'
    import app_content from '../components/content/app-content'
export default {
    name: "review-page",
    data: () => {
        return {
            data: null
        }
    },
    components: {app_intro, app_content},
    async asyncData({store, route}) {
        const request = {
            url: 'reviews'
        }
        const response = await DAL_Page.getData(request)
        const body = response.data 
        const data = body
        data.body.currentUrl = process.env.BASE_URL + route.path 
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
