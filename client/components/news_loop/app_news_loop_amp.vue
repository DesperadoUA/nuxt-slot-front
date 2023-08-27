<template>
  <div class="useful-categories">
    <div class="container">
      <div class="useful-group">
        <NuxtLink v-for="(item, index) in currentPosts" 
          :key="index" 
          :to="`${config.AMP_PREFIX}${item.permalink}`" 
          class="news-item"
        >
          <div class="news-item__img">
            <amp-img :src="item.thumbnail" :alt="item.title" class="news_thumbnail" width="200" height="113" />
          </div>
          <div class="news-item__txt">
            <span class="news-item__date">{{item.create_at}}</span>
            <strong class="news-item__ttl" v-html="item.title"/>
            <p v-html="item.short_desc"></p>
          </div>
        </NuxtLink>
      </div>

      <div class="items-more casino-card__more">
        <button v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                class="btn-primary"
        >{{translates.SHOW_MORE[config.LANG]}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import translateMixin from '~/mixins/translate'
    export default {
        name: "app_news_loop",
        props: {
            value: {
                type: Array,
                default: {}
            },
        },
        mixins: [translateMixin],
        data(){
            return {
                numberPostOnQuery: 8,
                postCurrentPage: 1,
            }
        },
        computed: {
            currentPosts() {
                return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>