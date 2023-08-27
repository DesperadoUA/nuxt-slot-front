<template>
  <div class="useful-categories">
    <div class="container">
      <div class="useful-categories__container">
        <div class="useful-group">
          <h3 class="useful-group__ttl">{{translates.NEWS[config.LANG]}}</h3>
          <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`" 
            class="news-item" v-for="(item, index) in value.news" :key="index">
            <span class="news-item__date">{{item.create_at}}</span>
            <strong class="news-item__ttl" v-html="item.title"></strong>
          </NuxtLink>
        </div>
        <div class="useful-group">
          <h3 class="useful-group__ttl">{{translates.BLOG[config.LANG]}}</h3>
          <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`" class="blog-item" v-for="(item, index) in value.blog" :key="index">
                    <span class="blog-item__media">
                        <amp-img :src="item.thumbnail" :alt="item.title" width="344" height="190" />
                    </span>
            <span class="blog-item__caption">{{item.title}}</span>
          </NuxtLink>
        </div>
        <div class="useful-group">
          <h3 class="useful-group__ttl">{{translates.INTERVIEW[config.LANG]}}</h3>

          <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.permalink}`" class="blog-item" v-for="(item, index) in value.interview" :key="index">
                    <span class="blog-item__media">
                        <amp-img :src="item.thumbnail" alt="" width="344" height="190" />
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
    import translateMixin from '~/mixins/translate'
    export default {
        name: "app_useful_amp",
        props: {
            'value': Object,
            default: {}
        },
        mixins: [translateMixin],
        data(){
            return {}
        }
    }
</script>