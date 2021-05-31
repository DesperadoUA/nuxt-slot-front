<template>
<div class="casinos">
    <div class="container">
        <div class="casinos__container">
            <div class="casino-item" v-for="(item, index) in value" :key="index" >
                <div class="casino-item__top">
                    <div class="casino-item__logo">
                        <img :src="item.thumbnail" alt="">
                    </div>

                    <div class="casino-item__rating">
                        <div class="circle-rating">
                            <svg viewBox="0 0 36 36" class="circle-rating__chart" style="--cr-rating: #ffc700;">
                                <path class="circle-rating__circle-bg"
                                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                <!-- значение рейтинга - 1ый параметр в атрибуте stroke-dasharray -->
                                <path class="circle-rating__circle"
                                      :stroke-dasharray="item.rating + ', 100'"
                                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            </svg>
                            <div class="circle-rating__percentage">{{item.rating}}</div>
                        </div>
                        <span class="casinos-rating__txt">Рейтинг</span>
                    </div>
                </div>

                <div class="casino-item__content">
                    <div class="casino-param">
                        <div :class="item.regular_offers == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                            <img class="casino-param__img" src="/img/fire.svg" width="17" alt="">
                            <span class="casino-param__txt">Regular Offers</span>
                        </div>

                        <div :class="item.live_chat == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                            <img class="casino-param__img" src="/img/chat.svg" width="19" alt="">
                            <span class="casino-param__txt">Live Chat</span>
                        </div>

                        <div :class="item.live_casino == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                            <img class="casino-param__img" src="/img/casino.svg" width="19" alt="">
                            <span class="casino-param__txt">Live Casino</span>
                        </div>

                        <div :class="item.vip_program == 1 ? 'casino-param__item': 'casino-param__item disabled'">
                            <img class="casino-param__img" src="/img/star.svg" width="17" alt="">
                            <span class="casino-param__txt">Vip Program</span>
                        </div>
                    </div>

                    <div class="casino-bonuses">
                        <div class="casino-bonus">
                            <span class="casino-bonus__value" style="color: #ffe600;">{{item.bonus}}</span>
                            <span class="casino-bonus__ttl">Приветственный бонус</span>

                            <div class="casino-bonus__wager">{{item.bonus_wagering}}</div>
                        </div>

                        <div class="casino-bonus">
                            <span class="casino-bonus__value" style="color: #12d4ff;">{{item.freespins}}</span>
                            <span class="casino-bonus__ttl">Фри спины</span>

                            <div class="casino-bonus__wager">{{item.freespins_wagering}}</div>
                        </div>
                    </div>

                    <div class="casino-item__btns">
                         <NuxtLink no-prefetch
                                  :to="item.permalink"
                                  class="casino-item__btn --green">Обзор казино</NuxtLink>
                        <button class="casino-item__btn --blue" @click="refActivate(item)">Перейти</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="casinos__cta">
            <a href="" class="btn-primary">Показать больше</a>
        </div>
    </div>
</div>
<!--
  <section class="content casino_table_wrapper">
      <div class="container">
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
          </div>
      </div>
  </section> -->
</template>

<script>
    export default {
        name: "app_casino_loop",
        props: {
            value: {
                type: Array,
                default: []
            }
        },
        data(){
            return {
                numberPostOnQuery: 12,
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

<style lang="scss" scoped>
.casinos {
    padding-bottom: 56px;
}

.casinos__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    counter-reset: counter;
    margin-left: -23px;
    margin-right: -23px;
    margin-bottom: 16px;

    &:after {
        content: '';
        flex: auto;
    }

    .casino-item {
        flex-shrink: 0;
        flex-basis: calc(33.333% - 46px);
        margin-left: 23px;
        margin-right: 23px;
        position: relative;
        counter-increment: counter;

        &:before {
            content: counter(counter);
            position: absolute;
            z-index: 2;
            border-radius: 50%;
            text-align: center;
            width: 25px;
            height: 25px;
            background: rgba(#000, .35);
            font-size: 12px;
            line-height: 24px;
            font-weight: 700;
            color: #fff;
            top: 7px;
            left: 7px;
        }
    }
}

.casino-item {
    color: #fff;
    max-width: 344px;
    background: rgba(#000, .2);
    border: 1px solid rgba(#fff, .1);
    border-radius: 14px;
    margin-bottom: 31px;
}

.casino-item__top {
    display: flex;
    margin-bottom: 18px;
}

.casino-item__logo {
    border-radius: 14px 0 0 14px;
    flex-shrink: 0;
    flex-basis: calc(100% - 112px);
}

.casino-item__rating {
    width: 112px;
    border-radius: 0 14px 14px 0;
    background-color: #1c0e27;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
}

.casinos-rating__txt {
    font-size: 14px;
}

.casino-item__content {
    padding-left: 8px;
    padding-right: 8px;
}

.casino-param {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
}

.casino-param__item {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: flex-end;

    &.disabled {
        opacity: .5;
    }
}

.casino-param__img {
    margin-bottom: 2px;
    max-width: 21px;
}

.casino-param__txt {
    font-size: 10px;
    font-weight: 700;
    opacity: .75;
}

.casino-bonuses {
    display: flex;
    justify-content: space-between;
    margin-left: -4px;
    margin-right: -4px;
    margin-bottom: 28px;

    .casino-bonus {
        flex-basis: calc(50% - 8px);
    }
}

.casino-bonus {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    margin-left: 4px;
    margin-right: 4px;
    font-weight: 700;
    max-width: 160px;
    background-color: rgba(#fff, .1);
    border-radius: 6px;
    text-align: center;
    padding-top: 18px;
}

.casino-bonus__value {
    font-size: 22px;
    line-height: 1.5;
    padding-left: 10px;
    padding-right: 10px;
}

.casino-bonus__ttl {
    font-size: 11px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 15px;
}

.casino-bonus__wager {
    background-color: rgba(#fff, .2);
    font-size: 12px;
    line-height: 25px;
    border-radius: 0 0 6px 6px;
}

.casino-item__btns {
    margin-left: -9px;
    margin-right: -9px;
    overflow: hidden;
    border-radius: 0 0 14px 14px;
}

.casino-item__btn {
    color: #fff;
    font-family: var(--base-font-family);
    font-size: 16px;
    font-weight: 700;
    min-height: 40px;
    text-decoration: none;
    border: 0;
    padding: 3px 5px;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &.--green {
        background-color: var(--btn-secondary);

        &:hover {
            background-color: #009c3e;
        }
    }

    &.--blue {
        background: linear-gradient(0deg, #0194ff, #0194ff), #01b94a;

        &:hover {
            background: linear-gradient(0deg, #0475dd, #0475dd), #01b94a;
        }
    }
}

.casinos__cta {
    text-align: center;

    .btn-primary {
        min-width: 230px;
    }
}
</style>
