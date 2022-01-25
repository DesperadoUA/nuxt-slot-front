<template>
<div class="cms" v-if="value!==''">
    <div class="container" v-html="value"></div>
</div>
</template>

<script>
    import TRANSLATE from '~/helpers/translate.json'
    export default {
        name: "app-content",
        props: ['value'],
        data(){
            return {}
        },
        mounted(){
            const main = document.querySelector('.cms')
            if(!main) return
            const menu = main.querySelector('.nav')
            if(menu) {
                const arrH = []
                const h2 = main.querySelectorAll('h2')
                h2.forEach(item => {
                    arrH.push(item)
                })
                const h3 = main.querySelectorAll('h3')
                h3.forEach(item => {
                    arrH.push(item)
                })
                const h4 = main.querySelectorAll('h4')
                h4.forEach(item => {
                    arrH.push(item)
                })
                const h5 = main.querySelectorAll('h5')
                h5.forEach(item => {
                    arrH.push(item)
                })
                const h6 = main.querySelectorAll('h6')
                h6.forEach(item => {
                    arrH.push(item)
                })
                let str = `<div class="article_menu_heading">${TRANSLATE.CONTENT.uk}</div>` +
                        '<ol class="article_menu">'
                if(arrH.length === 0) {
                    menu.remove()
                } else {
                    arrH.forEach( (item, index) => {
                        str += `<li><b>${index +1}.</b>
                      <a href="#heading_${index}">
                        ${item.innerHTML}
                      </a>
                    </li>`
                    })
                    str += '</ol>'

                    menu.insertAdjacentHTML('afterBegin', str)
                    arrH.forEach((item, index) => {
                        item.setAttribute('id', `heading_${index}`)
                    })
                }
            }
        }
    }
</script>
<style lang="scss" scope>
.cms {
    background-color: var(--theme-bg-1);
    padding-top: 45px;
    font-family: var(--alt-font-family);
    display: flow-root;

    .slots + & {
        padding-top: 0;
    }

    p {
        margin-bottom: 32px;
    }

    h2 {
        font-size: 24px;
        line-height: 1.179;
        margin-bottom: 21px;

        @media (min-width: 992px) {
            font-size: 28px;
        }
    }

    h3 {
        font-size: 20px;
        line-height: 1.182;
        margin-bottom: 16px;

        @media (min-width: 992px) {
            font-size: 22px;
        }
    }

    h4 {
        font-size: 16px;
        line-height: var(--base-line-height);
        margin-bottom: 25px;

        @media (min-width: 992px) {
            font-size: 18px;
        }
    }

    ul, ol {
        margin: 0 0 25px;
        padding: 0;
        list-style: none;
    }

    ul {
        li {
            padding-left: 25px;
            position: relative;

            &:before {
                position: absolute;
                top: 10px;
                left: 5px;
                content: '';
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background-color: currentColor;
            }
        }
    }

    ol {
        counter-reset: counter;

        li {
            padding-left: 30px;
            position: relative;
            counter-increment: counter;

            &:before {
                content: counter(counter) '.';
                position: absolute;
                top: 0;
                left: 5px;
            }
        }
    }
    .article_menu a {
        text-decoration: none;
        color: var(--theme-cr-txt-cms);
    }
    .article_menu {
        list-style-type: none;
        margin-bottom: 0px;
    }
    .article_menu li:before {
        display: none;
    }
    .article_menu_heading {
        margin-left: 20px;
        font-size: 24px;
        font-weight: 700;
    }
}
.cms .nav {
    border-radius: 10px;
    padding: 15px 15px 15px 0;
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 20px rgb(2 19 62 / 20%);
    border-radius: 8px;
    border-left: 4px solid var(--table-head);
}
.cms-banner {
    position: relative;
    margin-bottom: 30px;

    @media (min-width: 992px) {
        margin-bottom: 50px;
    }

    img {
        border-radius: 15px;
    }
}
.cms-banner__ttl {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    font-weight: 700;
    line-height: 1.6;
    color: rgba(#fff, .35);

    @media (min-width: 992px) {
        font-size: 64px;
    }
}
.two-cols {
    margin-bottom: 10px;

    @media (min-width: 992px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 25px;
    }
}
.two-cols__ttl {
    width: 100%;
}
.two-cols__col {
    @media (min-width: 992px) {
        flex: 0 0 49%;
        max-width: 49%;
    }
}
@media (min-width: 992px) {
    .alignLeft {
        float: left;
        margin-right: 25px;
        margin-bottom: 20px;
    }
    .alignRight {
        float: right;
        margin-left: 25px;
        margin-bottom: 20px;
    }
}
table {
    font-family: var(--base-font-family);
    line-height: 1.6;
    box-shadow: 0 2px 14px rgba(#04001a, .15);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 50px;
    border-spacing: 0;
    background-color: #fff;
    border-radius: 14px;
    border: 1px solid rgba(#000, .2);
    display: block;
    width: 100%;

    thead,
    tbody {
        min-width: 500px;
        display: table;
        width: 100%;
    }

    thead td,
    th {
        font-size: 18px;
        line-height: 1.556;
        background-color: var(--table-head);
        padding: 12px 10px 12px 24px;
        color: #fff;
        text-align: left;
        text-transform: uppercase;

        &:first-child {
            border-radius: 14px 0 0 0;
            width: 260px;
        }

        &:last-child {
            border-radius: 0 14px 0 0;
        }
    }

    tr {
        &:not(:last-child) {
            td {
                border-bottom: 1px solid rgba(#000, .2);
            }
        }
    }

    &--no-border {
        tr {
            &:not(:last-child) {
                td {
                    border-bottom: 0;
                }
            }
        }
    }

    td {
        font-size: 18px;
        padding: 11px 10px 11px 24px;

        &:first-child {
            width: 260px;
        }

        img {
            vertical-align: middle;
        }
    }

    .icon-cross {
        color: #ff5f5f;
    }

    .icon-check {
        color: var(--btn-secondary);
    }
}
.table__btn {
    text-align: center;
    margin-top: 32px;

    [class*="btn-"] {
        min-width: 230px;
    }
}
.cms .pluses {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 20px;
}
.cms .pluses_left, .cms .pluses_right {
    width: 50%;
    @media (max-width: 767px) {
        width: 100%;
        margin-top: 20px;
    }
}
.cms .pluses_title {
    background: var(--table-head);
    font-family: var(--base-font-family);
    color: #fff;
    display: block;
    height: 35px;
    padding: 5px;
    text-align: center;
    font-weight: 900;
}
.pluses ul {
    margin-bottom: 0px;
}
.pluses_left .pluses_title {
    border-top-left-radius: 6px;
    @media (max-width: 767px) {
        border-top-right-radius: 6px;
    }
}
.pluses_right .pluses_title {
    border-top-right-radius: 6px;
    @media (max-width: 767px) {
        border-top-left-radius: 6px;
    }
}
.pluses_left ul li:before {
    content: '✔';
    width: 0px;
    top: 1px;
    left: 3px;
    color: green;
}
.pluses_right ul li:before {
    content: '❌';
    width: 0px;
    top: 1px;
    left: 0px;
    color: red;
}
.pluses_content {
    padding: 10px;
}
.pluses_left  {
    border-left:1px solid var(--table-head);
    border-right:1px solid var(--table-head);
    border-bottom:1px solid var(--table-head);
    border-top-left-radius: 6px;
    @media (max-width: 767px) {
        border-left:1px solid var(--table-head);
        border-top-right-radius: 6px;
    }
}
.pluses_right  {
    border-right:1px solid var(--table-head);
    border-bottom:1px solid var(--table-head);
    border-top-right-radius: 6px;
    @media (max-width: 767px) {
        border-left:1px solid var(--table-head);
        border-top-left-radius: 6px;
    }
}
</style>
