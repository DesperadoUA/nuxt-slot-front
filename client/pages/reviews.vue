<template>
  <main>
      
  </main>
</template>

<script>
    import DAL_Page from '../DAL/static_pages'
export default {
    name: "review-page",
    data: () => {
        return {
            data: null
        }
    },
    components: {},
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
