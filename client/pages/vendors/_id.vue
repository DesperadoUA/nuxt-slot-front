<template>
  <div>
    <app_intro :value="data.body" />
    <app_vendor_card :value="data.body"/>
    <app_heading v-if="data.body.casino.length !== 0" :value="{
                          title: data.translate.casinosWith + data.body.title,
                          permalink:'/reviews', 
                          title_permalink: data.translate.allCasino
                        }" />
    <app_vendor_casino :value="data.body.casino" />
    <app_heading v-if="data.body.slots.length !== 0" :value="{
                          title: data.translate.games + data.body.title,
                          permalink:'', 
                          title_permalink: ''
                        }" />
    <app_slot_loop_card :value="data.body.slots" />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import TRANSLATE from '~/helpers/translate'
    import app_intro from '~/components/intro/app-intro'
    import app_vendor_card from '~/components/vendor_card/app_vendor_card'
    import app_vendor_casino from '~/components/vendor_casino/app_vendor_casino'
    import app_slot_loop_card from '~/components/slot_loop_card/app_slot_loop_card'
    import app_heading from '~/components/section-heading/app-section-heading'
    export default {
        name: "app_single_vendor",
        components: {app_intro, app_vendor_card, app_vendor_casino, app_slot_loop_card, app_heading},
        data: () => {
            return {
                data: {

                },
            }
        },
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('vendors')
                                          .url(route.params.id)
                                          .get()
            if(response.data.confirm === 'error') {
                error({ statusCode: 404, message: 'Post not found' })
            }
            else {
                const body = response.data.body
                const data = {body}
                data.translate = {
                    casinosWith: `${TRANSLATE.CASINOS_WITH.uk} `,
                    allCasino: TRANSLATE.ALL_CASINO.uk,
                    games: `${TRANSLATE.GAMES.uk} `
                }
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