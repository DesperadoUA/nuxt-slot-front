<template>
  <div>
    <Header />
    <main class="main">
      <nuxt />
    </main>
    <!--<Footer /> -->
  </div>
</template>

<script>
    import Header from '../components/header/app-header'
   // import Footer from '../components/footer/app-footer'
    export default {
        name: "app-main",
     //   components: {Header, Footer},
     components: {Header}
    }
</script>

<style lang="scss">
:root {
        /* container width */
        --container: 1150px;
        --container--cms: 960px;

        /* Theme color */
        --theme-cr-1:       #302552;
        --theme-cr-2:       #281c4c;
        --theme-cr-3:       #1f4fad;
        --theme-cr-txt:     var(--theme-cr-2);
        --theme-cr-txt-alt: #fff;
        --cr-success:       #00ff66;
        --btn-primary:      #0194ff;
        --btn-secondary:    #01b94a;
        --table-head:       #5f63c0;
        --disabled-bg:               #fafbfc;
        --disabled-cr:               #c7ccd8;

        /* Fonts */
        --base-font-size:   16px;
        --base-line-height:  1.6;
        --base-font-family: 'Open Sans', Arial, sans-serif;
        --alt-font-family:  'Roboto', Arial, sans-serif;

        /* Theme bg-color */
        --theme-bg-1:       #f5f8ff;

        /* Theme images */
        --bg-main:          url(/img/bg-main.jpg);
        --bg-main-webp:     url(/img/bg-main.webp);

        --transition-default: .27s cubic-bezier(0.215, 0.61, 0.355, 1);

        --maxWidth: 1440; /* max screen size for adaptive font mixin */
        --side-gutters: 15px;
    }
* {
    box-sizing: border-box
}

@font-face {
    font-family: "Open Sans";
    src: url("/fonts/opensans.woff2") format("woff2");
    font-weight: 400;
}

@font-face {
    font-family: "Open Sans";
    src: url("/fonts/opensansbold.woff2") format("woff2");
    font-weight: 700;
}

@font-face {
    font-family: "Roboto";
    src: url("/fonts/roboto.woff2") format("woff2");
    font-weight: 400;
}

@font-face {
    font-family: "Roboto";
    src: url("/fonts/robotobold.woff2") format("woff2");
    font-weight: 700;
}

body {
    margin: 0;
    min-width: 320px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: var(--base-font-size);
    font-family: var(--base-font-family);
    line-height: var(--base-line-height);
    color: var(--theme-cr-txt);
    background-color: var(--theme-bg-1);
}

a {
    text-decoration: underline;
    color: var(--theme-cr-3);

    &:not([class]){
        @media (min-width: 992px) {
            text-decoration: none;
            color: var(--theme-cr-3);
        }
    }
}

a,
button {
    transition: var(--transition-default);
}

img {
    max-width: 100%;
    height: auto;
}

img,
video,
iframe {
    vertical-align: top;
}

strong, b {
    font-weight: 700;
}

.h,
h1, .h1,
h2, .h2,
h3, .h3,
h4, .h4,
h5, .h5 {
    margin-top: 0;
}

p {
    margin-top: 0;
    margin-bottom: 0;
}

ul, ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
    vertical-align: top
}

.container {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-left: var(--side-gutters);
    padding-right: var(--side-gutters);
    max-width: var(--container);

    &--cms {
        @extend .container;
        max-width: var(--container--cms);
    }
}

.icon {
    display: inline-block;
    vertical-align: middle;
    width: 1em;
    height: 1em;
    max-width: 1em;
    flex: 0 0 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
}

%btn-general {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    background-color: transparent;
    border: 0;
    padding: 0;
}

.btn-default {
    @extend %btn-general;
    color: var(--theme-cr-1);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
    text-align: center;
    position: relative;
    padding: 0;
}

.btn-primary {
    @extend %btn-general;
    font-size: 14px;
    border-radius: 19px;
    background-color: var(--btn-primary);
    font-weight: 500;
    line-height: 1.5;
    position: relative;
    z-index: 0;
    color: #fff;
    min-height: 38px;
    padding: 5px .9em;

    @media (min-width: 992px) {
        background-color: var(--btn-primary);

        &:after {
            opacity: 1;
            visibility: visible;
        }
    }

    /* hack for IE11 */
    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, & {
            height: 38px;
        }
    }

    &.is-disabled,
    &[disabled] {
        background-color: var(--disabled-bg);
        color: var(--disabled-cr);
    }

    .icon-arrow-next {
        font-size: .714em;
        margin-left: 5px;
        margin-top: 1px;
    }
}

[class*="btn"][disabled] {
    pointer-events: none;
}

.btn-secondary {
    @extend %btn-general;
    font-size: 14px;
    border-radius: 19px;
    background-color: var(--btn-secondary);
    font-weight: 500;
    line-height: 1.5;
    position: relative;
    z-index: 0;
    color: #fff;
    min-height: 38px;
    padding: 5px .9em;

    @media (min-width: 992px) {
        background-color: var(--btn-secondary);

        &:after {
            opacity: 1;
            visibility: visible;
        }
    }

    /* hack for IE11 */
    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, & {
            height: 38px;
        }
    }

    &.is-disabled,
    &[disabled] {
        background-color: var(--disabled-bg);
        color: var(--disabled-cr);
    }

    .icon-arrow-next {
        font-size: .714em;
        margin-left: 5px;
        margin-top: 1px;
    }
}

.btn-block {
    display: flex;
    width: 100%;
}
.main {
    overflow: hidden;
    position: relative;
    padding-top: 111px;
    background-color: var(--theme-cr-2);
    background-image: var(--bg-main);
    background-position: 50% 0;
    background-repeat: no-repeat;

    @media (min-width: 992px) {
        padding-top: 146px;
    }
}


</style>
