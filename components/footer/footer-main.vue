<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <footer1 class="col" />
        <footer2 class="col" />
        <footer3 class="col" />
        <footer4 class="col" />
      </div>
    </div>
  </footer>
</template>

<script>
import Footer4 from '~/components/footer/footer-4'
import Footer3 from '~/components/footer/footer-3'
import Footer2 from '~/components/footer/footer-2'
import Footer1 from '~/components/footer/footer-1'
export default {
  name: 'FooterMain',
  components: { Footer1, Footer2, Footer3, Footer4 },
}
</script>

<style lang="sass">
@import 'assets/sass/footer/footer-main.sass'
</style>
