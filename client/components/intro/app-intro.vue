<template>
  <section class="intro">
        <div class="container--cms text-center">
            <h1>{{data.h1}}</h1>
            <div v-html="data.short_desc"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "app_intro",
        props: ['data'],
        data() {
            return {
            }
        }
    }
</script>

<style>
    
</style>