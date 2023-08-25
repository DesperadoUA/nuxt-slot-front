<template>
    <header class="header">
    <div class="container header__container">
      <a :href="config.AMP_PREFIX" >
        <amp-img :src="logo" class="logo" width="177" height="31" />
      </a>
      <button class="hamburger navbar__btn" on='tap:sidebar1.toggle'>
          <span class="bar">
            <div class="bar_line"></div>
            <div class="bar_line"></div>
            <div class="bar_line"></div>
          </span>
      </button>
      <amp-sidebar id="sidebar1" layout="nodisplay" side="right">
          <ul class="nav_menu">
            <li class="menu_box_item" 
                     v-for="(item, index) in menu_links" 
                     :key="index">
                    <NuxtLink no-prefetch :to="`${config.AMP_PREFIX}${item.value_1}`" >
                        {{item.value_2}}
                    </NuxtLink>
                 </li>
          </ul>
      </amp-sidebar>
    </div>
  </header>
</template>
<script>
    import translateMixin from '~/mixins/translate.js'
    export default {
        name: "app-header_amp",
        mixins: [translateMixin],
        props: ['logo', 'menu_links'],
        data(){
            return {}
        }
    }
</script>