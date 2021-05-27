<template>
    <div>
        <app_intro :data="data" />
        <app_best_offer :data="data" />
    </div>
</template>

<script>
    import app_intro from '../intro/app-intro'
    import app_best_offer from '../best-offer/app-best-offer'
    export default {
        name: "app_banner",
        props: ['data'],
        components: {app_intro, app_best_offer},
        data(){
            return {
                
            }
        },
    }
</script>

<style>
    
</style>