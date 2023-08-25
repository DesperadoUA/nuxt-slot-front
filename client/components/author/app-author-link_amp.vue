<template>
  <div class="author_link">
    <div class="leftPart">
        {{text}}: <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${link}`">{{ name }}</NuxtLink>
    </div>
    <div class="rightPart">
      {{translates.PUBLICATION_DATE[config.LANG]}}: <span>{{dataTime}}</span>
    </div>
  </div>
</template>
<script>
import translateMixin from '~/mixins/translate'
export default {
  name: "app_author_link",
  props: {
    link: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    dataTime: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mixins: [translateMixin]
}
</script>