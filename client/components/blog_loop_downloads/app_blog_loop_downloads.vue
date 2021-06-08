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
        >Показать больше</button>
    </div>
</div>
</template>

<script>
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
                postCurrentPage: 1
            }
        },
        computed: {
            currentPosts() {
               return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        },
        filters:{
            classRating(item) {
                if(item.rating < 33) return '--cr-rating: #f00'
                if(item.rating > 33 && item.rating < 67) return '--cr-rating: #ffc700'
                if(item.rating > 67) return '--cr-rating: #0f6'
            }
        },
        methods: {
            refActivate(item) {
                if(item.ref.length !== 0) {
                    const min = 0
                    const max = item.ref.length - 1
                    const random = Math.floor(Math.random() * (max - min + 1)) + min
                    window.open(item.ref[random].casino_ref, '_blank')
                }
            },
            postShowMore(){
                this.postCurrentPage += 1
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
