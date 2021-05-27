<template>
  <footer class="footer">
    <div class="partners-logos">
      <div class="container">
        <ul class="partners-logos__list">
          <li class="partners-logos__item"><img src="img/gambling-therapy-logo.svg" alt=""></li>
          <li class="partners-logos__item"><img src="img/begambleawareorg-logo.svg" alt=""></li>
          <li class="partners-logos__item"><img src="img/dmca-logo.svg" alt=""></li>
          <li class="partners-logos__item"><img src="img/21+.svg" alt=""></li>
          <li class="partners-logos__item"><img src="img/copyright-house-logo.svg" alt=""></li>
        </ul>
      </div>
    </div>

    <div class="footer__copyrights">
      <div class="container">
        <p>© 2017-2020 Онлайн казино для украинцев.</p>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "app-footer",
        data(){
            return {
               options: null
            }
        },
        computed: {
          changeOptions(){
            this.options = this.$store.getters['options/getOptions']
            return this.options
          }
        }
    }
</script>

<style lang="scss">
.footer {
  background-color: var(--theme-cr-1);
  color: var(--theme-cr-txt-alt);
  position: relative;
  overflow: hidden;
}

.footer__container {}

.partners-logos {
  padding-top: 41px;
  padding-bottom: 38px;

  @media (min-width: var(--desktop)) {}
}

.partners-logos__list {
  margin: 0 -25px;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.partners-logos__item {
  margin-left: 25px;
  margin-right: 25px;
}

.footer__copyrights {
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: var(--theme-cr-2);
  font-size: 15px;
  text-align: center;

  @media (min-width: var(--desktop)) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}

</style>
