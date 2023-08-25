<template>
  <div class="blog-single">
    <app_header_amp :logo="data.body.options.logo" :menu_links="data.body.settings.header_menu" />
        <h1>Blog id</h1>
    <app_footer_amp 
        :footer_menu="data.body.settings.footer_menu"
        :footer_text="data.body.settings.footer_text"
    />
    <!--<div class="container blog-single__container">
        <app_blog_single :value="data.body">
          <template v-slot>
            <app_author_link 
                  :link="config.AUTHOR_PAGE_LINK"
                  :text="translates.REVIEW_AUTHOR[config.LANG]"
                  :dataTime="data.body.create_at.slice(0, 10)"
                  :name="data.body.author_name"
            />
          </template>
        </app_blog_single>
        <app_last_article :title="translates.LAST_ARTICLE[config.LANG]"
                          :value="data.body.posts" />
    </div>-->
  </div>
</template>

<script>
    import DAL_Builder from '~/DAL/builder'
    import helper from '~/helpers/helpers'
    //import app_blog_single from '~/components/blog_single/app_blog_single'
    //import app_last_article from '~/components/last_article/app_last_article'
    //import app_author_link from '~/components/author/app-author-link'
    import pageTemplateAmp from '~/mixins/pageTemplateAmp'
    export default {
        name: "app_single_blog_amp",
        //components: {app_blog_single, app_last_article, app_author_link},
        mixins: [pageTemplateAmp],
        data: () => {
            return {
                data: {},
            }
        },
        async asyncData({route, error}) {
            const request = new DAL_Builder()
            const response = await request.postType('blog')
                                          .url(route.params.id)
                                          .get()
             if(response.data.confirm === 'error') {
                 error({ statusCode: 404, message: 'Post not found' })
             }
             else {
                 const body = response.data.body
                 let settings = {
                     url: process.env.BASE_URL + route.path,
                     title: body.title,
                     short_desc: body.short_desc,
                     thumbnail: body.thumbnail
                 }
                 const data = await helper.globalDataMixin(response, route)
                 data.body.sharedFB = helper.sharedFB(settings)
                 data.body.sharedTwitter =  helper.sharedTwitter(settings)
                 data.body.sharedVK = helper.sharedVK(settings)
                 return {data}
              }
           },
        methods: {
            sharedFB(){
                return 'Shared fb'
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