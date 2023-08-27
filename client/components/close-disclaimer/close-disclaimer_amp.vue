<template>
  <section class="disclaimer_close">
    <div class="container">
        <div class="disclaimer_wrapper">
            <div class="close_ttl">{{translates.CLOSED[config.LANG]}}!</div>
            <div class="close_text">{{translates.DISCLAIMER_TEXT_BEFORE[config.LANG]}} {{value}} {{translates.DISCLAIMER_TEXT_AFTER[config.LANG]}}</div>
        </div>
    </div>
  </section>
</template>
<script>
import translate from '~/mixins/translate'
    export default {
        name: "close-disclaimer",
        mixins: [translate],
        props: {
            value: {
                type: String
            }
        }
    }
</script>