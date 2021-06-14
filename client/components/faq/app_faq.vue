<template>
    <section class="faq" itemscope itemtype="https://schema.org/FAQPage" v-if="currentValue.length !== 0">
        <div class="container">
            <h2 class="faq_title">{{ title }}</h2>
        </div>
        <div class="container faq_wrapper">
            <div class='faq_row'
                 itemscope
                 itemprop='mainEntity'
                 itemtype='https://schema.org/Question'
                 v-for="(item, index) in currentValue"
                 :key="index"
            >
                <div class='faq_question'
                     @click="activate(item)"
                     :class="{faq_active: item.status === 'open'}"
                >
                    <span itemprop='name'>{{ item.question }}</span>
                    <span class='faq_close'></span>
                </div>
                <div class='faq_answer'
                     :class="{fadeIn: item.status === 'open'}"
                     itemscope
                     itemprop='acceptedAnswer'
                     itemtype='https://schema.org/Answer'>
                    <span itemprop='text' v-html="item.answer"></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "app_faq",
        props: {
            'value': Array,
            'title': String
        },
        data(){
            return {
                currentValue: []
            }
        },
        methods: {
            activate(item) {
                item.status === 'close' ? item.status = 'open' : item.status = 'close'
            }
        },
        mounted() {
            const faq = []
            this.value.forEach(element => {
                faq.push({
                    status: 'close',
                    answer: element.value_2,
                    question: element.value_1
                })
            })
            this.currentValue = faq
        }
    }
</script>
<style lang="scss">
.faq {
    padding: 30px 0;
    background-color: var(--theme-bg-1);
}
.faq_title {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 11px;
    color: var(--theme-cr-4);
}
.faq_question {
    transition: var(--transition-default);
    background-color: var(--faq-cr);
    border-radius: 10px;
    padding: 5px 75px 5px 25px;
    margin-top: 2px;
    font-style: normal;
    font-weight: bold;
    line-height: 36px;
    color: #fff;
    position: relative;
    cursor: pointer;
    font-size: 16px;

    @media (min-width: 992px) {
        &:hover {
            opacity: .85;
        }
    }
}
.faq_answer {
    font: inherit;
    line-height: 22px;
    vertical-align: baseline;
    padding: 45px 65px;
    display: none;
    opacity: 0;
    transition: 0.7s;
}
.faq_answer span {
    font-family: var(--font);
}
.faq_close {
    width: 12px;
    height: 6px;
    position: absolute;
    background: var(--faq_close);
    top: 20px;
    right: 25px;
    transition: 0.7s;
}
.fadeIn {
    display: block;
    opacity: 1;
}
.faq_active .faq_close {
    transform: rotate(180deg);
}
@media (min-width: 320px) and (max-width: 767px) {
    .faq_answer {
        padding: 15px;
    }
}
</style>
