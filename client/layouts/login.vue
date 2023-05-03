<template>
    <div>
        <Header/>
        <nuxt />
    </div>
</template>

<script>
    import Header from '~/components/header/app-header'
    export default {
        name: "registration",
         components: {Header},
    }
</script>

<style scoped>
    
</style>