<template>
  <div class="useful-categories">
    <div class="container">
      <div class="useful-group">
        <NuxtLink v-for="(item, index) in currentPosts" :key="index" :to="item.permalink" class="news-item">
          <div class="news-item__img">
            <img :src="item.thumbnail" :alt="item.title" class="news_thumbnail">
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
                @click="postShowMore"
        >{{showMore}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_news_loop",
        props: {
            value: {
                type: Array,
                default: {}
            },
        },
        data(){
            return {
                numberPostOnQuery: 8,
                postCurrentPage: 1,
                showMore: ''
            }
        },
        computed: {
            currentPosts() {
                return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        },
        methods: {
            postShowMore(){
                this.postCurrentPage += 1
            }
        },
        mounted() {
            this.showMore = TRANSLATE.SHOW_MORE.uk
        }
    }
</script>

<style lang="scss" scoped>
  .news-item {
    @media (min-width: 768px) and (max-width: 1200px) {
      display: flex;
    }
  }
  .news-item__txt {
    @media (min-width: 768px) and (max-width: 1200px) {
      padding-left: 20px;
    }
  }
.news_thumbnail {
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
  }
}
.news-item__img {
  @media (min-width: 320px) and (max-width: 767px) {
    flex-basis: 100%;
    max-width: 100%;
    margin: 0px 0px 20px;
  }
}
</style>