<template>
  <aside class="last-articles">
    <h3 class="last-articles__ttl">{{title}}</h3>
    <ul class="articles-list">
      <li v-for="(item, index) in value" :key="index">
        <NuxtLink :to="`${config.AMP_PREFIX}${item.permalink}`" class="articles-list__item">
          <span class="date">{{item.create_at}}</span>
          <strong class="articles-list__txt">{{item.title}}</strong>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script>
import translate from '~/mixins/translate'
    export default {
        name: "app_last_article",
        mixins: [translate],
        props: {
            'value': Array,
            'title': String
        },
    }
</script>