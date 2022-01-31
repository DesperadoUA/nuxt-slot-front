<template>
   <div class="register_container">
       <div class="form_container">
           <div class="form_title">{{title}}</div>
           <form @submit.prevent="send">
                <input type="text" class="form_input" 
                       v-model="name" 
                       placeholder="name"
                       maxlength="50"
                       minlength="3"
                />
                <div class="form_error" v-if="nameError">{{nameError}}</div>
                <input type="email" class="form_input" v-model="email" placeholder="mail">
                <div class="form_error" v-if="mailError">{{mailError}}</div>
                <input type="password" class="form_input" 
                       v-model="password" 
                       placeholder="password"
                       maxlength="12"
                       minlength="6"
                />
                <div class="form_error" v-if="passwordError">{{passwordError}}</div>
                <button class="form_btn">Send</button>
                <div class="back_error" v-if="backEndError.length !== 0">
                    <div class="form_error" v-for="(item, index) in backEndError" :key="index">
                        {{item}}
                    </div>
                </div>
                <div class="success" v-if="successfulMessage.length !== 0">{{successfulMessage}}</div>
           </form>
       </div>
   </div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    import Validate from '~/helpers/validate'
    import DAL_Forum from '~/DAL/forum'
    export default {
        name: "registration",
        data() {
            return {
                title: '',
                name: '',
                password: '',
                email: '',
                nameError: null,
                mailError: null,
                passwordError: null,
                formValid: true,
                backEndError: [],
                successfulMessage: ''
            }
        },
        methods: {
          async  send() {
                this.formValid = true
                this.nameError = null
                this.mailError = null
                this.passwordError = null
                this.backEndError = []
                this.successfulMessage = ''
                const data = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
                
                if(Validate.isEmpty(data.name)) {
                    this.nameError = "Введіть ім'я" 
                    this.formValid = false
                } 
                else {
                    if(Validate.minLength(data.name, 3)) {
                       this.nameError = "Коротке ім'я, мінімум 3 символи" 
                       this.formValid = false
                    } 
                    if(Validate.maxLength(data.name, 50)) {
                       this.nameError = "Довге ім'я, максимум 50 символів"
                       this.formValid = false
                    } 
                }
                
                if(!Validate.isEmail(data.email)) {
                    this.formValid = false
                    this.mailError = 'Неприпустима адреса електронної пошти'
                }
                else if (Validate.minLength(data.email, 4)) {
                    this.formValid = false
                    this.mailError = 'Неприпустима адреса електронної пошти'
                }

                if(Validate.minLength(data.password, 6)) {
                     this.passwordError = "Короткий пароль, мінімальна довжина 6 символів" 
                     this.formValid = false
                }
                if(Validate.maxLength(data.password, 12)) {
                     this.passwordError = "Довгий пароль, максимальна довжина 12 символів" 
                     this.formValid = false
                }

                if(this.formValid) {
                  const result = await DAL_Forum.addCandidate(data)
                  if(result.data.confirm === 'ok') {
                      this.successfulMessage = TRANSLATE.SUCCESS_MESSAGE.uk
                  } else {
                      this.backEndError = result.data.error
                  }
                }
            }
        },
        mounted() {
            this.title = TRANSLATE.REGISTRATION.uk
        },
        head() {
            return {
                title: 'Регистрация',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Регистрация',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scope>
    .register_container {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form_container {
        width:320px;
        border:1px solid red;
        padding: 5px 10px;
        border-radius: 12px;
    }
    .form_title {
        font: var(--base-font-family);
        font-size: 20px;
        font-weight: bold;
    }
    .form_error {
        padding: 0px 5px 5px 5px;
        color: red;
    }
    .form_input {
        width: 100%;
        height: 35px;
        border-radius: 4px;
        margin-bottom: 10px;
    }
</style>