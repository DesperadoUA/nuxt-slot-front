<template>
      <div>
        <app_intro :value="data.body" />
        <app_best_offer :value="data.body.bonuses" />
        <app_category_link :value="data.body.category_link" />
        <app_casino_loop_downloads :value="data.body.casino" />
        <app_new_casino :value="data.body.new_casino" />
        <app_popular_slots :value="data.body.popular_slots" />
        <app_popular_offers :value="data.body.popular_bonus" />
        <app_content :value="data.body.content"  />
      </div>
</template>

<script>
   import DAL_Page from '~/DAL/static_pages'
   import config from '~/config/index'
   import app_intro from '~/components/intro/app-intro'
   import app_best_offer from '~/components/best-offer/app-best-offer'
   import app_category_link from '~/components/category_link/app-category_link'
   import app_casino_loop_downloads from '~/components/casino_loop_downloads/app_casino_loop_downloads'
   import app_new_casino from '~/components/new_casino/app-new_casino'
   import app_popular_slots from '~/components/popular_slots/app-popular_slots'
   import app_popular_offers from '~/components/popular_offers/app_popular_offers'
   import app_content from '~/components/content/app-content'
export default {
    name: "main-page",
    data: () => {
        return {
            data: {}
        }
    },
    components: {app_intro, app_best_offer, app_category_link, app_casino_loop_downloads, 
    app_content, app_new_casino, app_popular_slots, app_popular_offers},
    async asyncData({store, route}) {
        const request = {
            url: 'main'
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
