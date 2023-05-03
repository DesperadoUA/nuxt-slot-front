<template>
  <div>
    <app_author_top v-if="data.body.h1 !== ''"
        :img="data.body.thumbnail"
        :name="data.body.h1"
        :specialty="$options.specialty"
        :link="$options.fbLink"
        :shortDesc="data.body.short_desc"
        :socialLinks="authorSocialLinks"
    />
    <app_content :value="data.body.content"  />
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import app_content from '~/components/content/app-content'
    import app_author_top from '~/components/author/app-author-top'
    import head from '~/mixins/head'
    import Helper from '~/helpers/helpers'
    import TRANSLATE from '~/helpers/translate.json'
    import config from '~/config'

    export default {
        name: "app-author",
        components: {app_content, app_author_top},
        mixins: [head],
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('pages')
                                          .url('author')
                                          .get()
            if(response.data.confirm === 'error') {
                error({ statusCode: 404, message: 'Post not found' })
            }
            else {
                const data = Helper.headDataMixin(response.data, route)
                return {data}
            }
        },
        computed: {
            authorSocialLinks() {
                const settings = this.$store.getters['settings/getSettings']
                if(settings) {
                return this.socialLinks = this.$store.getters['settings/getSettings']
                    .filter(item => item.key === 'social_links_author' )[0].value 
                } 
                return []
            }
        },
        created() {
            this.$options.specialty = TRANSLATE.AUTHOR_SPECIALIZATION[config.LANG]
            this.$options.fbLink = config.AUTHOR_FB_URL
        }
    }
</script>

<style scoped>

</style>