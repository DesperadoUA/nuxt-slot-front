<template>
    <button class="promoBtn" @click="copy">
        {{text}} 
        <span class="badge">{{subTitle}}</span>
    </button>
</template>
<script>
    export default {
        name: "app_promo_btn",
        props: {
           text: {
             type: String,
             default: ''
           },
           subTitle: {
             type: String,
             default: ''
           }
        },
        methods: {
            copy() {
                try {
                    navigator.clipboard.writeText(this.text)
                } catch(e) {

                }
            }
        }
    }
</script>
<style scoped>
    .promoBtn {
        max-width: 215px;
        width: 100%;
        margin-left: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
        background: var(--btn-secondary);
        font-size: 16px;
        border-radius: 6px;
        position: relative;
        margin-top: 15px;
        height: 50px;
        border: none;
        display: flex;
        align-items: center;
        font-family: var(--base-font-family);
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
    }
    .promoBtn::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 25px;
        background: url('/img/copy-icon.svg');
        background-size: contain;
        background-repeat: no-repeat;
        top: 15px;
        right: 10px;
    }
    .badge {
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateY(-50%);
        transform: translateX(-50%);
        white-space: nowrap;
        font-family: var(--base-font-family);
        font-size: 12px;
        font-weight: 400;
        background: var(--btn-secondary);
        padding: 0px 5px;
        border-radius: 2px;
    }
    @media (max-width: 767px) {
        .promoBtn {
            max-width: 100%;
        }
    }
</style>