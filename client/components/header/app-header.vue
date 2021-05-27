<template>
    <header class="header">
        <div class="header__container container">
           <app-logo />
           <app_menu />
           <app_search />
        </div>
    </header>
  <!--<header>
    <div class="container header_container">
      <NuxtLink no-prefetch to="/" >
        <img :src="options.logo" 
             class="logo" 
             width="107" 
             height="34"
             >
      </NuxtLink>
      <div class="menu">
           <button class="btn header_btn">Казино Украины</button>
           <div class="dropdown_menu">
             <nav class="menu_box">
               <ul>
                 <li class="menu_box_item" 
                     v-for="(item, index) in options.menu_link" 
                     :key="index">
                    <NuxtLink no-prefetch :to="item.permalink" >
                        {{item.title}}
                    </NuxtLink>
                 </li>
               </ul>
             </nav>
           </div>
      </div>
    </div>
  </header>-->
</template>
<script>
    import app_logo from './app-logo'
    import app_menu from './app-menu'
    import app_search from './app-search'
    export default {
        name: "app-header",
        components: {app_logo, app_menu, app_search},
        data(){
            return {
                options: {},
                settings: {}
            }
        }
    }
</script>

<style lang="scss">
:root {
  --scrollbar-width: 0;
}
.header {
  padding-top: 14px;
  padding-bottom: 14px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: calc(100vw - var(--scrollbar-width));
  z-index: 999;
  /*.scrolled & {
      background-color: rgba(#fff, .8);
  }*/
  @media (min-width: 992px) {
    position: absolute;
    padding-top: 40px;
    padding-bottom: 25px;
  }
}
.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    max-width: 83.073vw;
  }
  @media (max-width: 530px) {
    max-width: none;
  }
  @media (min-width: 1600px) {
    padding-right: 115px;
  }
}
</style>