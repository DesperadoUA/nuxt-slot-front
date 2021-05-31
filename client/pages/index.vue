<template>
      <div>
        <app_intro :value="data.body" />
        <app_best_offer :value="data.body.bonuses" />
        <app_category_link :value="data.body.category_link" />
        <app_casino_loop :value="data.body.casino" />
        <app_content :value="data.body.content"/>
      </div>
</template>

<script>
   import DAL_Page from '../DAL/static_pages'
   import app_intro from '../components/intro/app-intro'
   import app_best_offer from '../components/best-offer/app-best-offer'
   import app_category_link from '../components/category_link/app-category_link'
   import app_casino_loop from '../components/casino_loop/app_casino_loop'
   import app_content from '../components/content/app-content'
export default {
    name: "main-page",
    data: () => {
        return {
            data: {}
        }
    },
    components: {app_intro, app_best_offer, app_category_link, app_casino_loop, app_content},
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
