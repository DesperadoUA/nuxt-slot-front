<template>
  <section class="content casino_table_wrapper">
      <div class="container">
          <!--
          <div class="casino_item" v-for="item in currentPosts" :key="item.id">
              <div class="casino_item_thumbnail">
                  <img :src="item.thumbnail" loading="lazy" width="200" height="100" @click="refActivate(item)" />
                  <img :src="item.marker" class="casino_item_marker" width="38" height="38" />
              </div>
              <div class="casino_item_rating casino_item_column ">
                  <div>
                    <div class="casino_item_title">{{item.title}}</div>
                    <div class="casino_item_subtitle">{{item.sub_title}}</div>
                    <div class="casino_item_rating_wrapper">
                        <div class="casino_item_rating_container">
                            <div class="casino_item_rating_box">
                                <div class="casino_item_rating_empty"></div>
                                <div class="casino_item_rating_full" v-bind:style="{ width: item.rating+'%'}"></div>
                            </div>
                            <div>
                                <span class="casino_item_ratin_value">{{item.rating | rating}}</span>/10
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
              <div class="casino_item_packet casino_item_column ">
                  <div v-if="item.bonuses.length != 0" class="casino_item_packet_item">
                    <div class="casino_item_title_packet">{{item.bonuses[0].bonuses_title}}</div>
                    <div class="casino_item_sub_title_packet">{{item.bonuses[0].bonuses_value}}</div>
                    <div class="casino_item_title_packet">{{item.bonuses[0].bonuses_sub_title}}</div>
                  </div>
              </div>
              <div class="casino_item_weiger casino_item_column ">
                  <div v-if="item.bonuses.length >= 2" class="casino_item_packet_item">
                    <div class="casino_item_title_packet">{{item.bonuses[1].bonuses_title}}</div>
                    <div class="casino_item_sub_title_packet">{{item.bonuses[1].bonuses_value}}</div>
                    <div class="casino_item_title_packet">{{item.bonuses[1].bonuses_sub_title}}</div>
                  </div>
              </div>
              <div class="casino_item_buttons casino_item_column ">
                  <div class="casino_item_buttons_box">
                    <button class="btn_ref" @click="refActivate(item)">Перейти</button>
                    <NuxtLink class="btn_review" no-prefetch :to="item.permalink" >Обзор</NuxtLink>
                  </div>
              </div>
          </div>  
          <div class="casino_table_btn_wrapper" v-if="posts.length > (numberPostOnQuery*postCurrentPage)">
              <button class="btn_review" @click="postShowMore">Загрузить еще</button>
          </div> -->
      </div>
  </section>
</template>

<script>
    export default {
        name: "app_casino_loop",
        props: ['posts'],
        data(){
            return {
                numberPostOnQuery: 20,
                postCurrentPage: 1
            }
        },
        computed: {
            currentPosts() {
               return this.posts.slice(0, this.numberPostOnQuery * this.postCurrentPage)
            }
        },
        filters:{
            rating(item){
                return Math.trunc(item/10)
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

<style scoped>

</style>