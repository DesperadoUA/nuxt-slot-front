<template>
  <div>
     <h2 v-if="value">Шаблон успешной регистрации</h2>
    <h2 v-else>Шаблон ошибки регистрации</h2>
  </div>
</template>

<script>
    export default {
        name: "result_registration",
        props: {
            value: {
                type: Boolean
            }
        }
    }
</script>

<style scoped>
    h2 {
      color: white;
      text-align: center;
    }
</style>