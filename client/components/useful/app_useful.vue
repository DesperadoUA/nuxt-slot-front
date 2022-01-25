<template>
  <div class="useful-categories">
    <div class="container">
      <div class="useful-categories__container">
        <div class="useful-group">
          <h3 class="useful-group__ttl">{{news}}</h3>
          <NuxtLink no-prefetch :to="item.permalink" class="news-item" v-for="(item, index) in value.news" :key="index">
            <span class="news-item__date">{{item.create_at}}</span>
            <strong class="news-item__ttl" v-html="item.title"></strong>
          </NuxtLink>
        </div>
        <div class="useful-group">
          <h3 class="useful-group__ttl">{{blog}}</h3>
          <NuxtLink no-prefetch :to="item.permalink" class="blog-item" v-for="(item, index) in value.blog" :key="index">
                    <span class="blog-item__media">
                        <img :src="item.thumbnail" :alt="item.title">
                    </span>
            <span class="blog-item__caption">{{item.title}}</span>
          </NuxtLink>
        </div>
        <div class="useful-group">
          <h3 class="useful-group__ttl">{{interview}}</h3>

          <NuxtLink no-prefetch :to="item.permalink" class="blog-item" v-for="(item, index) in value.interview" :key="index">
                    <span class="blog-item__media">
                        <img :src="item.thumbnail" alt="">
                        <button class="btn-play-video">
                            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10.768C22.3333 11.5378 22.3333 13.4623 21 14.2321L3.75 24.1913C2.41666 24.9611 0.750001 23.9989 0.750001 22.4593L0.750002 2.54071C0.750002 1.0011 2.41667 0.0388563 3.75 0.808657L21 10.768Z" fill="white"/>
                            </svg>
                        </button>
                    </span>
            <span class="blog-item__caption">{{item.title}}</span>
          </NuxtLink>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_useful",
        props: {
            'value': Object,
            default: {}
        },
        data(){
            return {
                news: '',
                blog: '',
                interview: ''
            }
        },
        mounted() {
            this.news = TRANSLATE.NEWS.uk
            this.blog = TRANSLATE.BLOG.uk
            this.interview = TRANSLATE.INTERVIEW.uk
        }
    }
</script>

<style scoped>

</style>