<template>
  <div>
    <app_intro :value="data.body" />
    <AuthorLinkContainer 
        :link="config.AUTHOR_PAGE_LINK"
        :text="translates.REVIEW_AUTHOR[config.LANG]"
        :dataTime="data.body.create_at.slice(0, 10)"
        :name="data.body.author_name"
        variant="transparent"
        align="contentEnd"
    />
    <app_vendor_card :value="data.body"/>
    <app_heading v-if="data.body.casino.length !== 0" :value="{
                          title: translates.CASINOS_WITH[config.LANG] + ' ' + data.body.title,
                          permalink:'/reviews', 
                          title_permalink: translates.ALL_CASINO[config.LANG]
                        }" />
    <app_vendor_casino :value="data.body.casino" />
    <app_heading v-if="data.body.slots.length !== 0" :value="{
                          title: translates.GAMES[config.LANG] + ' ' + data.body.title,
                          permalink:'', 
                          title_permalink: ''
                        }" />
    <app_slot_loop_card :value="data.body.slots" />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import app_intro from '~/components/intro/app-intro'
    import app_vendor_card from '~/components/vendor_card/app_vendor_card'
    import app_vendor_casino from '~/components/vendor_casino/app_vendor_casino'
    import app_slot_loop_card from '~/components/slot_loop_card/app_slot_loop_card'
    import app_heading from '~/components/section-heading/app-section-heading'
    import AuthorLinkContainer from '~/components/author/app-author-link-container'
    import translateMixin from '~/mixins/translate'
    import head from '~/mixins/head'
    import Helper from '~/helpers/helpers'
    export default {
        name: "app_single_vendor",
        components: {app_intro, app_vendor_card, app_vendor_casino, app_slot_loop_card, app_heading, AuthorLinkContainer},
        mixins: [head, translateMixin],
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
                const data = Helper.headDataMixin(response.data, route)
                return {data}
            }
        }
    }
</script>

<style>

</style>