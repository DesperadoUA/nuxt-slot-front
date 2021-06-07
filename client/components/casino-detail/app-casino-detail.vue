<template>
  <div class="casino-detail">
    <div class="container">
      <div class="detail-row" v-if="value.details.length !== 0">
        <h3 class="detail-row__ttl">Детали</h3>
        <div class="detail-row__content">
          <ul class="detail-list">
            <li class="detail-list__item" v-for="(item, index) in value.details" :key="index" >
              <span class="detail-list__ttl">{{item.value_1}}</span>
              <span class="detail-list__value">{{item.value_2}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="detail-row">
        <h3 class="detail-row__ttl">Предложения игр</h3>

        <div class="detail-row__heading" v-if="value.type_games.length !== 0">
          <h4 class="detail-row__sub-ttl">Типы игр</h4>
        </div>

        <div class="detail-row__content"  v-if="value.type_games.length !== 0">
          <div class="game-type" v-for="(item, index) in value.type_games" :key="index">
            <img class="game-type__icon" width="17" height="20" :src="icons[item]" />
            {{item}}
          </div>
        </div>

        <div class="detail-row__heading" v-if="value.vendors.length !== 0">
          <h4 class="detail-row__sub-ttl">Провайдеры</h4>
        </div>

        <div class="detail-row__content" v-if="value.vendors.length !== 0">
          <NuxtLink no-prefetch
          :to="item.permalink"
             class="detail-item"
             v-for="(item, index) in value.vendors" :key="index">
            <img class="detail-item__icon" width="26" height="26" :src="item.icon" />
            {{item.title}}
          </NuxtLink>
        </div>
      </div>

      <div class="detail-row" v-if="value.payments.length !== 0">
        <h3 class="detail-row__ttl">Оплата</h3>

        <div class="detail-row__heading">
          <h4 class="detail-row__sub-ttl">Варианты оплаты</h4>
        </div>

        <div class="detail-row__content">
          <NuxtLink no-prefetch
                    no-prefetch
                    :to="item.permalink"
                    v-for="(item, index) in value.payments" :key="index"
                    class="detail-item">{{item.title}}</NuxtLink>
        </div>
      </div>

      <div class="detail-row">
        <div class="detail-row__heading">
          <h4 class="detail-row__sub-ttl">Депозит</h4>
        </div>

        <div class="detail-row__content">
          <ul class="detail-list">
            <li class="detail-list__item">
              <span class="detail-list__ttl">Мин. депозит:</span>
              <span class="detail-list__value">{{value.min_deposit}}</span>
            </li>
            <li class="detail-list__item">
              <span class="detail-list__ttl">Мин. вывод:</span>
              <span class="detail-list__value">{{value.min_payout}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "app-casino-detail",
        props: {
            value: {
                type: Object
            }
        },
        data(){
            return {
                icons: {
                    'Blackjack': '/img/game_types/blackjack.png',
                    'Baccarat': '/img/game_types/baccarat.png',
                    'Live Casino': '/img/game_types/live_casino.png',
                    'Slots': '/img/game_types/slots.png',
                    'Poker': '/img/game_types/poker.png',
                    'Roulette': '/img/game_types/roulette.png'
                }
            }
        }
    }
</script>

<style lang="scss">
  .casino-detail {
    --heading-col-width: 228px;
    --detail-ttl-width: 139px;

    padding-top: 59px;
    padding-bottom: 17px;
    background-color: #fff;
    display: flow-root;
  }

  .detail-row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 9px;
  }

  .detail-row__heading {
    flex: 0 0 var(--heading-col-width);
    max-width: var(--heading-col-width);
    margin-bottom: 20px;
    padding-top: 8px;
  }

  .detail-row__ttl {
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .detail-row__sub-ttl {
    font-weight: 400;
    margin-bottom: 0;
  }

  .detail-row__content {
    width: calc(100% - var(--heading-col-width));
    margin-left: auto;
    margin-bottom: 12px;
    display: flex;
    flex-wrap: wrap;
  }

  .detail-list {
    margin: 0 0 -12px;
    padding: 0;
    list-style: none;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    line-height: 1.375;
  }

  .detail-list__item {
    flex: 0 0 43%;
    max-width: 43%;
    padding-right: 10px;
    display: flex;
    margin-bottom: 12px;
  }

  .detail-list__ttl {
    flex: 0 0 var(--detail-ttl-width);
    padding-right: 5px;
  }

  .detail-list__value {
    flex-shrink: 0;
    font-weight: 700;
    flex-basis: calc(100% - var(--detail-ttl-width));
  }

  .game-type {
    display: inline-flex;
    align-items: center;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    min-height: 40px;
    padding: 6px 12px;
    background: rgba(#0f0038, .7);
    border-radius: 6px;
    margin-right: 8px;
    margin-bottom: 8px;
    text-decoration: none;
  }

  .game-type__icon {
    margin-right: 10px;
    margin-left: 4px;

    path {
      fill: currentColor;
    }
  }

  .detail-item {
    transition: var(--transition-default);
    display: inline-flex;
    align-items: center;
    color: #281c4b;
    font-weight: 600;
    font-size: 14px;
    padding: 6px 12px;
    margin-bottom: 8px;
    margin-right: 8px;
    min-height: 40px;
    background: rgba(#281c4b, .08);
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px transparent;
    text-decoration: none;

    @media screen and (min-width: 992px) {
      &:hover {
        box-shadow: inset 0 0 0 1px var(--btn-primary);
      }
    }
  }

  .detail-item__icon {
    margin-right: 10px;
    margin-left: 4px;
  }
</style>
