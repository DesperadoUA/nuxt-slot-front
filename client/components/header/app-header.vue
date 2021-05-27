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
        },
        async mounted(){
          await this.$store.dispatch('options/setOptions')
          const options = this.$store.getters['options/getOptions']
          this.options = options

          const data = {lang: 1}
          await this.$store.dispatch('settings/setSettings', data)
          const settings = this.$store.getters['settings/getSettings']
          this.settings = settings
        }
    }
</script>

<style>
  
</style>