<template>
  <section class="disclaimer_close">
    <div class="container">
        <div class="disclaimer_wrapper">
            <div class="close_ttl">Закрито!</div>
            <div class="close_text">Нажаль, казино {{value}} припинило роботу. Рекомендовані казино:</div>
        </div>
    </div>
  </section>
</template>
<script>
    export default {
        name: "close-disclaimer",
        props: {
            value: {
                type: String
            }
        }
    }
</script>

<style scoped>
  .disclaimer_close {
    padding-top: 20px;
    padding-bottom: 20px;
    background: #fff;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  .disclaimer_wrapper {
    padding: 20px;
    border-radius: 12px;
    background: #EA3838;
    color: var(--disabled-bg);
    text-decoration: none;
    font-family: var(--font);
    font-weight: bold;
  }
  @media (max-width: 767px) {
    .disclaimer_close {
      padding: 15px;
    }
  }
  .close_ttl {
    font-size: 24px;
  }
</style>