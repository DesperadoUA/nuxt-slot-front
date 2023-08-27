<template>
  <section class="slick_button">
    <a class="slick_button_part_left" :href="`${config.AMP_PREFIX}/casino`"></a>
    <a class="slick_button_part_right" :href="getRef({ref: referal})"></a>
    <div class="container slick_button_container">
      <div class="slick_button_left">
        <amp-img src='/img/arrow.png' class="slick_button_arrow left_arrow" width="8" height='12' />
        <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}'/casino'`" >
          {{translates.CASINO_REVIEWS[config.LANG]}}
        </NuxtLink>
      </div>
      <div class="slick_button_right">
        {{translates.GO_CASINO_SITE[config.LANG]}}
         <amp-img src='/img/arrow.png' class="slick_button_arrow right_arrow" width="8" height='12' />
      </div>
    </div>
  </section>
</template>

<script>
import translate from '~/mixins/translate'
import helper from '~/helpers/helpers.js'
    export default {
        name: "app_slick_button",
        props:['referal'],
        mixins: [translate],
        data() {
            return {}
        },
        filters: {
            refValidate(value) {
                return value === '' ? '/' : value
            }
        },
        methods: {
             getRef(item) {
              return helper.getRef(item)
            }
        },
    }
</script>