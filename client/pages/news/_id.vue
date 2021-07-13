<template>
  <div class="blog-single">
    <div class="container blog-single__container">
      <app_blog_single :value="data.body" />
      <app_last_article :title="title"
                        :value="data.body.posts" />
    </div>
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import config from '~/config/index'
    import Helper from '~/helpers/helpers'
    import TRANSLATE from '~/helpers/translate'
    import app_blog_single from '~/components/blog_single/app_blog_single'
    import app_last_article from '~/components/last_article/app_last_article'
    export default {
        name: "app_news_single",
        components: {app_blog_single, app_last_article},
        data: () => {
            return {
                data: {},
                title: TRANSLATE.LAST_NEWS.uk
            }
        },
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('news')
                                          .url(route.params.id)
                                          .get()
            if(response.data.confirm === 'error') {
                error({ statusCode: 404, message: 'Post not found' })
            }
            else {
                const body = response.data.body
                const data = {body}
                let settings = {
                    url: process.env.BASE_URL + route.path,
                    title: body.title,
                    short_desc: body.short_desc,
                    thumbnail: body.thumbnail
                }
                body.sharedFB = Helper.sharedFB(settings)
                body.sharedTwitter = Helper.sharedTwitter(settings)
                body.sharedVK = Helper.sharedVK(settings)
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

<style scoped lang="scss">
  .blog-single {
    --last-article-width: 26.4%;
    background-color: var(--theme-bg-1);
    overflow: hidden;

    .main > &:first-child {
      margin-top: -53px;
    }

    .cms {
      padding-top: 0;
    }
  }

  .blog-single__container {
    @media (min-width: 992px) {
      display: flex;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        pointer-events: none;
        left: calc(100% - var(--side-gutters) - 2px);
        width: 9999px;
        background-color: #fff;
      }
    }
  }
</style>