<template>
      <div>
        <app_intro :value="data.body" />
        <app_best_offer :value="data.body.bonuses" />
        <app_bonuses_loop :value="data.body.list" />
        <app_content :value="data.body.content"  />
      </div>
</template>

<script>
   import DAL_Builder from '~/DAL/builder'
   import config from '~/config/index'
   import app_intro from '~/components/intro/app-intro'
   import app_best_offer from '~/components/best-offer/app-best-offer'
   import app_bonuses_loop from '~/components/bonuses_loop_downloads/app_bonuses_loop_downloads'
   import app_content from '~/components/content/app-content'
export default {
    name: "app_bonuses",
    data: () => {
        return {
            
        }
    },
    components: {app_intro, app_best_offer, app_content, app_bonuses_loop},
    async asyncData({store, route, error}) {
        const request = new DAL_Builder()
        const response = await request.postType('pages')
                                          .url('bonuses')
                                          .get()
        if(response.data.confirm === 'error') {
            error({ statusCode: 404, message: 'Post not found' })
        }
        else {
            const body = response.data.body
            const data = {body}
            data.body.currentUrl = config.BASE_URL + route.path
            return {data}
        }
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
