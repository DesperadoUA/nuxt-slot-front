<template>
<div class="container">
    <div class="blog">
        <div class="blog__container">
            <NuxtLink :to="item.permalink" class="blog-item" v-for="(item, index) in currentPosts" :key="index">
                <span class="blog-item__media">
                    <img :src="item.thumbnail" alt="">
                </span>
                <span class="blog-item__caption">{{item.title}}</span>
            </NuxtLink>
        </div>
    </div>
    <div class="items-more casino-card__more">
        <button no-prefetch v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                class="btn-primary"
                @click="postShowMore"
        >{{showMore}}</button>
    </div>
</div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app_blog_downloads",
        props: {
            value: {
                type: Array,
                default: []
            },
        },
        data(){
            return {
                numberPostOnQuery: 12,
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
</style>
