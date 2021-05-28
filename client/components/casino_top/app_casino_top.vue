<template>
  <section class="casino_top">
      
  </section>
</template>

<script>
    export default {
        name: "app_casino_top",
        props: ['value'],
        data(){
            return {
                
            }
        },
        filters:{
            rating(item){
                return Math.trunc(item/10)
            }
        },
        methods: {
            refActivate(ref) {
               if(ref.length !== 0) {
                    const min = 0
                    const max = ref.length - 1
                    const random = Math.floor(Math.random() * (max - min + 1)) + min
                    window.open(ref[random].casino_ref, '_blank')
                } 
            }
        }
    }
</script>
<style> 
    .casino_top_list li {
        display: inline-block;
        color: var(--blue);
        padding: 3px 10px;
        border: 1px solid var(--gray);
        box-sizing: border-box;
        border-radius: 7px;
        margin-right: 5px;
        margin-top: 5px;
    }
    .casino_top_list li a {
        text-decoration: none;
        font-family: var(--font-bold);
    }
    .casino_top_list .green {
      color: var(--green);
      border: 1px solid var(--green);
    }
     .casino_top_list a {
        color: var(--blue);
    }
    .casino_top_list .green a {
        color: var(--green);
    }
    .casino_top_desc_row {
        display: flex;
        width: 100%;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .casino_top_currency_item {
        width: 40px;
    } 
    .casino_top_desc, .casino_top_desc_value {
        min-width: 25%;
        font-family: var(--font-semi);
        font-style: normal;
        font-size: 14px;
        line-height: 25px;
        text-transform: uppercase;
        color: var(--light-black);
    }
    .casino_top_desc_value {
        font-weight: bold;
    }
    .casino_top_desc_value {
        width: 75%;
        display: flex;
        flex-wrap: wrap;
    }
    .casino_top_currency_item img {
        margin-right: 15px;
    }
    .casino_top_currency {
        display: flex;
    }
    .casino_top_bonus_item_sub_title {
        width: 100%;
        margin-top: 10px;
        font-family: var(--font-semi);
        font-style: normal;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        text-transform: uppercase;
        color: var(--light-black);
        margin-bottom: 10px;
    }
    .casino_top_bonus_item_value {
        width: 100%;
        margin-top: 10px;
        font-family: var(--font-bold);
        font-style: normal;
        font-size: 24px;
        line-height: 33px;
        text-align: center;
        text-transform: uppercase;
        color: var(--middle-black);
    }
    .casino_top_bonus_item_title {
        width: 100%;
        font-family: var(--font-semi);
        font-style: normal;
        font-size: 12px;
        line-height: 16px;
        text-transform: uppercase;
        color: var(--light-black);
        text-align: center;
        margin-top: 15px;
    }
    .casino_top_bonuses {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
    }
    .casino_top_bonus_item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 222px;
        min-height: 112px;
        box-sizing: border-box;
        background: var(--white);
        border: 1px solid var(--gray);
        box-sizing: border-box;
        box-shadow: 0px 2px 10px rgba(77, 92, 129, 0.25);
        border-radius: 15px;
    }
    .casino_top {
        padding-top: 30px;
        padding-bottom: 40px;
        background: var(--blue-gradient);
    }
    .casino_top_wrapper {
        display: flex;
    }
    .casino_top_left {
        width: 25%;
        text-align: center;
    }
    .casino_top_right {
        width: 75%;
    }
    .casino_top_thumbnail {
        width: 200px;
        height: 110px;
        margin: 0 auto;
    }
    .casino_top_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .casino_top_title {
        margin-top: 20px;
        font-family: var(--font-bold);
        font-style: normal;
        font-size: 22px;
        line-height: 30px;
        color: var(--middle-black);
    }
    .casino_top_sub_title {
        font-family: var(--font-semi);
        font-style: normal;
        font-size: 14px;
        line-height: 19px;
        color: var(--light-black);
        padding-bottom: 15px;
    }
    .casino_top_rating {
        margin: 0 auto;
    }
    .btn_ref {
        width: 180px;
        height: 46px;
        background: var(--green);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        box-shadow: inset 0px 0px 4px rgba(255, 255, 255, 0.25);
        border-radius: 10px;
        display: inline-block;
        text-align: center;
        font-family: var(--font-bold);
        font-style: normal;
        font-size: 17px;
        line-height: 23px;
        text-align: center;
        color: var(--white);
        text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
        text-decoration: none;
        line-height: 46px;
        margin-bottom: 15px;
        cursor: pointer;
    }
    .casino_item_ratin_value {
        font-family: var(--font-bold);
        font-style: normal;
        font-size: 22px;
        line-height: 30px;
        color: var(--middle-black);
    }
    .casino_item_rating_full {
        position: absolute;
        top:0px;
        left:0px;
        height: 100%;
        background: var(--star_full);
    }
    .casino_item_rating_empty {
        height: 100%;
        width: 100%;
        background: var(--star_empty);
    }
    .casino_item_rating_container {
        display: flex;
        padding: 2px 10px;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
    }
    .casino_item_rating_box {
        width: 120px;
        height: 24px;
        position: relative;
    }
    .casino_item_rating_wrapper {
     margin-top: 10px;
     width: 203px;
     height: 35px;
     background: #EFF3F7;
     border-radius: 18.5px;
    }
    .casino_top_btn_wrapper {
        margin-top: 25px;
    }
    @media (min-width: 320px) and (max-width: 767px) {
        .casino_top_wrapper {
            flex-wrap: wrap;
        }
        .casino_top_left {
            width:100%;
        }
        .casino_top_right {
            width:100%;
        }
        .casino_top_bonuses {
            flex-wrap: wrap;
            justify-content: center;
        }
        .casino_top_bonus_item {
            margin-top: 20px;
            width: 100%;
            height: auto;
            padding-bottom: 15px;
        }
        .casino_top_desc_row {
            flex-wrap: wrap;
        }
        .casino_top_desc, .casino_top_desc_value {
            width: 100%;
        }
        .casino_top_currency_item {
            margin-top: 10px;
        }
    }
</style>