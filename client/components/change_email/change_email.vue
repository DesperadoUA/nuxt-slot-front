<template>
  <div class="pop_up">
    <div class="form_container">
      <div class="close" @click="close">X</div>
      <form @submit.prevent="send">
        <div class="form_ttl">Смена почты</div>
        <input type="password" placeholder="new email" class="form_input" />
        <button>Send</button>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "change_email",
        methods: {
            close(){
                this.$store.dispatch('user-activity/changeStateEmail')
            },
            send(){
                console.log('Send change email')
            }
        }
    }
</script>

<style scoped>
  .pop_up {
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background: #2A1F34;
    display: flex;
    align-items: center;
    justify-content: center;
    left:0;
    top:0;
  }
  .form_container {
    width: 350px;
    max-width: 90%;
    padding: 15px 10px;
    border: 1px solid red;
    border-radius: 12px;
    position: relative;
  }
  .form_ttl {
    color: white;
  }
  .close {
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0px;
    top: -30px;
    border-radius: 50%;
    font-weight: bolder;
    cursor: pointer;
  }
</style>