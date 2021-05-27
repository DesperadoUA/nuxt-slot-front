<template>
      <div>
        <app_intro :data="data.body" />
        <app_best_offer :data="data.body.bonuses" />
      </div>
</template>

<script>
    import DAL_Page from '../DAL/static_pages'
   import app_intro from '../components/intro/app-intro'
   import app_best_offer from '../components/best-offer/app-best-offer'
export default {
    name: "main-page",
    data: () => {
        return {
            data: {}
        }
    },
    components: {app_intro, app_best_offer},
    async asyncData({store, route}) {
        const request = {
            url: 'main'
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
