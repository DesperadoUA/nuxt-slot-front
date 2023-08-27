<template>
<div class="container">
    <div class="blog">
        <div class="blog__container">
            <NuxtLink :to="`${config.AMP_PREFIX}${item.permalink}`" class="blog-item" v-for="(item, index) in currentPosts" :key="index">
                <span class="blog-item__media">
                    <amp-img :src="item.thumbnail" alt="" width="345" height="200" />
                </span>
                <span class="blog-item__caption">{{item.title}}</span>
            </NuxtLink>
        </div>
    </div>
    <div class="items-more casino-card__more">
        <button v-if="value.length > (numberPostOnQuery*postCurrentPage)"
                class="btn-primary"
        >{{translates.SHOW_MORE[config.LANG]}}</button>
    </div>
</div>
</template>

<script>
    import translateMixin from '~/mixins/translate'
    export default {
        name: "app_blog_downloads",
        mixins: [translateMixin],
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
            }
        },
        computed: {
            currentPosts() {
               return this.value.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        }
    }
</script>