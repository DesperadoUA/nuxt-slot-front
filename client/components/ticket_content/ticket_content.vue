<template>
    <div class="ticket_form">
        <div class="container">
            <div class="ticket_ttl">{{title}}</div>
            <div class="ticket_container">
                <app_list_casino :value="listCasino" />
                <textarea class="form_textarea" v-model="content" @change="changeText"></textarea>
                <button @click="send" class="ticket_form_btn">Send</button>
                <div class="error"  v-if="this.error.length !== 0">{{error}}</div>
                <div class="success"  v-if="successState.length !== 0">{{successState}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Validate from '~/helpers/validate'
    import TRANSLATE from '~/helpers/translate.json'
    import app_list_casino from '~/components/list_casino/list_casino'
    export default {
        name: "app_ticket_content",
        data: () => {
            return {
                content: '',
                successfulMessage: '',
                formValid: true,
                error: '',
                title: TRANSLATE.LEAVE_COMPLAINT.uk
            }
        },
        components: {
            app_list_casino
        },
        methods: {
            changeText(){
                this.$store.dispatch('tickets/setContent', this.content)
            },
           async send() {
                this.formValid = true
                this.successfulMessage = ''
                this.error = ''
                const user = this.$store.getters['user/getUser']
                const data = {
                    content: this.$store.getters['tickets/getContent'],
                    casino: this.$store.getters['tickets/getCurrentCasino'],
                    id: user.id,
                    session: user.session
                }

                if(Validate.isEmpty(data.casino)) {
                    this.error = "Выберите казино" 
                    this.formValid = false
                } 
                if(Validate.isEmpty(data.content)) {
                    this.error = "Пустое сообщение" 
                    this.formValid = false
                } 
                if(Validate.minLength(data.content, 100)) {
                       this.error = "Минимальная длина сообщения 100 символов" 
                       this.formValid = false
                    } 
                
                if(this.formValid) {
                   await this.$store.dispatch('tickets/sendTicket', data)
                   this.successfulMessage = 'Жалоба отправлена на модерацию'
                   const user = this.$store.getters['user/getUser']
                   const userData = {
                        id: user.id,
                        session: user.session
                    }
                   this.content = ''
                   this.$store.dispatch('tickets/setContent', this.content)
                   await this.$store.dispatch('tickets/setUserTickets', userData)
                }
            }
        },
        computed: {
            listCasino(){
                return this.$store.getters['tickets/getPosts']
            },
            successState(){
                this.successfulMessage = this.$store.getters['tickets/getSuccess'] 
                return this.$store.getters['tickets/getSuccess']
            },
            errorState(){
                this.error = this.$store.getters['tickets/getError']
                return this.$store.getters['tickets/getError']
            }
        },
    }
</script>

<style scoped lang="scss">
  .ticket_form {
      padding: 40px 0px 50px 0px;
      background: #281C4B;
  }
  .ticket_ttl {
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 38px;
      color: #FFFFFF;
      margin-bottom: 35px;
  }
  .success {
      color: #FFFFFF;
      margin-top: 35px;
  }
  .error {
      color: red;
      margin-top: 35px;
  }
  .ticket_container {
      width: 540px;
      max-width: 100%;
  }
  .ticket_container .form_textarea {
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      height: 140px;
      padding: 15px;
      box-sizing: border-box;
      margin-top: 20px;
      color: white;
  }
  .ticket_form_btn {
      width: 269px;
      height: 50px;
      background: #0194FF;
      border-radius: 10px;
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      color: white;
      cursor: pointer;
      border: none;
      margin-top: 20px;
  }
</style>