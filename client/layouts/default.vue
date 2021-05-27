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
  --container:        1150px;
  --container--cms:   960px;
  /* Theme color */
  --theme-cr-1:       #302552;
  --theme-cr-2:       #281c4b;
  --theme-cr-3:       #1f4fad;
  --theme-cr-txt:     var(--theme-cr-2);
  --theme-cr-txt-alt: #fff;
  --cr-success:       #00ff66;
  --btn-primary:      #0194ff;
  --btn-secondary:    #01b94a;
  --table-head:       #5f63c0;
  --theme-bg-1:       #f5f8ff;
  --bg-main:          url(/img/bg-main.jpg);
  --bg-main-webp:     url(/img/bg-main.webp);
  --maxWidth:         1440; 
  --side-gutters:     15px;
  --base-font-size:            16px;
  --base-line-height:          1.6;
  --base-font-family:          'Open Sans', Arial, sans-serif;
  --alt-font-family:           'Roboto', Arial, sans-serif;
  --animation-speed:           .27s;
  --animation-type:            cubic-bezier(0.215, 0.61, 0.355, 1);
  
  @mixin adaptive-font($mobSize, $pcSize) {
    $maxWidth: var(--maxWidth);
    $addSize: $pcSize - $mobSize;
    $max-width: var($maxWidth) - 320;
    font-size: calc(#{$mobSize + px} + #{$addSize} * ((100vw - 360px) / #{$max-width}));
    @media ('>=#{$maxWidth + px}') {
      font-size: #{$pcSize + px};
    }
  }
  * {
    box-sizing: border-box;
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
  %container-general {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    padding-left: var(--side-gutters);
    padding-right: var(--side-gutters);
  }
  .container {
    @extend %container-general;
    max-width: var(--container);
  }
  .main {
    overflow: hidden;
    position: relative;
    padding-top: 111px;
    color: var(--theme-cr-txt-alt);
    background-color: var(--theme-cr-2);
    background-image: var(--bg-main);
    background-position: 50% 0;
    background-repeat: no-repeat;
    background-size: cover;
    @media (min-width: 992px) {
      padding-top: 146px;
    }
  }
}
</style>
