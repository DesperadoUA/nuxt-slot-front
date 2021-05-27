<template>
    <div class="search">
        <button type="button" class="btn-default search__cta">
            <svg class="icon icon-search"><use xlink:href="#icon-search"></use></svg>
        </button>
    </div> 
</template>
<script>
    export default {
        name: "app-search",
        data(){
            return {
                options: {}
            }
        },
        async mounted(){
          /*
          await this.$store.dispatch('options/setOptions')
          const options = this.$store.getters['options/getOptions']
          this.options = options
          */
        }
    }
</script>

<style>
  
</style>