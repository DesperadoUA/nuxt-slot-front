<template>
  <div class="pop_up">
    <div class="form_container">
      <div class="close" @click="close">X</div>
      <form @submit.prevent="send">
        <div class="form_ttl">Смена пароля</div>
        <input type="password"
               placeholder="new password"
               maxlength="12"
               minlength="6"
               v-model="password"
               class="form_input" />
        <div class="form_error" v-if="passwordError">{{passwordError}}</div>
        <button>Send</button>
        <div class="success" v-if="successfulMessage.length !== 0">{{successfulMessage}}</div>
      </form>
    </div>
  </div>
</template>

<script>
    import Validate from '~/helpers/validate'
    export default {
        name: "change_password",
        data() {
          return {
              password: '',
              formValid: true,
              passwordError: null,
              successfulMessage: ''
          }
        },
        methods: {
            close(){
                this.$store.dispatch('user-activity/changeStatePassword')
            },
            async send(){
                this.passwordError = null
                this.formValid = true
                const password = this.password

                if(Validate.minLength(password, 6)) {
                    this.passwordError = "Короткий пароль, мінімальна довжина 6 символів"
                    this.formValid = false
                }
                if(Validate.maxLength(password, 12)) {
                    this.passwordError = "Довгий пароль, максимальна довжина 12 символів"
                    this.formValid = false
                }
                if(this.formValid) {
                  const user = this.$store.getters['user/getUser']
                  const data = {
                    id: user.id,
                    session: user.session,
                    password: password
                  }
                  await this.$store.dispatch('user/changePassword', data)
                  await this.$store.dispatch('user/logout', data)
                  this.$store.dispatch('user-activity/changeStatePassword')
                  const statusUser = this.$store.getters['user/getUser']
                  if(!statusUser.login) this.$router.push('/login')
                }
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