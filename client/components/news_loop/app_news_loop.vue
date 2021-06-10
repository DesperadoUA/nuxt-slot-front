<template>
  <div class="useful-categories">
    <div class="container">
      <div class="useful-group">
        <NuxtLink v-for="(item, index) in currentPosts" :key="index" :to="item.permalink" class="news-item">
          <div class="news-item__img">
            <img :src="item.thumbnail" :alt="item.title">
          </div>
          <div class="news-item__txt">
            <span class="news-item__date">{{item.create_at}}</span>
            <strong class="news-item__ttl">{{item.title}}</strong>
            <p v-html="item.short_desc"></p>
          </div>
        </NuxtLink>
      </div>

      <div class="items-more casino-card__more">
        <button v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                class="btn-primary"
                @click="postShowMore"
        >Показать больше
        </button>
      </div>
    </div>
  </div>
</template>

<script>
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
                postCurrentPage: 1
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
        }
    }
</script>

<style scoped>

</style>