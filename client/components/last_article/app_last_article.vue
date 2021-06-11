<template>
  <aside class="last-articles">
    <h3 class="last-articles__ttl">{{title}}</h3>
    <ul class="articles-list">
      <li v-for="(item, index) in value" :key="index">
        <NuxtLink :to="item.permalink" class="articles-list__item">
          <span class="date">{{item.create_at}}</span>
          <strong class="articles-list__txt">{{item.title}}</strong>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script>
    export default {
        name: "app_last_article",
        props: {
            'value': Array,
            'title': String
        },
    }
</script>

<style scoped lang="scss">
  .last-articles {
    background-color: #fff;
    padding: 40px 15px 20px;

  @media (min-width: 992px) {
    padding: 60px 28px 40px;
    flex-shrink: 0;
    flex-basis: var(--last-article-width);
    max-width: var(--last-article-width);
  }
  }

  .last-articles__ttl {
    font-size: 18px;
    line-height: 1.389;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 15px;
  }

  .articles-list {
    margin: 0;
    padding: 0;
    list-style: none;

  .date {
    color: var(--theme-cr-4);
    font-size: 14px;
    line-height: 1.8;
    opacity: .75;
    margin-bottom: 1px;
  }
  }

  .articles-list__item {
    font-size: 14px;
    line-height: 118.7%;
    display: flex;
    flex-direction: column;
    color: var(--theme-cr-4);
    text-decoration: none;
    padding-top: 4px;
    padding-bottom: 13px;
    border-bottom: 1px solid #281c4b19;

  @media (min-width: 992px) {
      &:hover {
        color: var(--btn-primary);
      }
    }
  }
</style>