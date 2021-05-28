<template>
  <div class="footer-element footer-element-4">
    <h2 class="h2">Мы в соцсетях</h2>
    <div class="row">
      <a href="https://vk.com/pantusclub" class="col">
        <img
          :src="require('@/assets/img/footer/vk.png')"
          alt=""
          class="img footer4-img"
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCwXbMkU-NXMp72xINxamRWQ"
        class="col"
      >
        <img
          :src="require('@/assets/img/footer/youtub.png')"
          alt=""
          class="img footer4-img"
        />
      </a>
      <a class="col" href="https://www.instagram.com/pantus.ru/">
        <img
          :src="require('@/assets/img/footer/instargam.png')"
          alt=""
          class="img footer4-img"
        />
      </a>
      <a href="https://tgclick.com/pantusclub" class="col">
        <img
          :src="require('@/assets/img/footer/telegram3.png')"
          alt=""
          class="img footer4-img"
        />
      </a>
    </div>
    <a href="https://apps.apple.com/us/app/pantus/id1475702773">
      <img
        :src="require('@/assets/img/footer/googleplay.svg')"
        alt=""
        class="img footer4-img__1"
      />
    </a>
    <a
      href="https://play.google.com/store/apps/details?id=ru.sigmadigital.pantus3"
    >
      <img
        :src="require('@/assets/img/footer/appstore.svg')"
        alt=""
        class="img footer4-img__1"
      />
    </a>
    <p class="text-footer text">
      Интернет-магазин автозапчастей Опт, розница, доставка
    </p>
    <a href="tel:8 800 555 8721" class="link link-hover-main footer4-link">
      <b>8 800 555 8721 </b>
    </a>
    <p class="text-footer text">© 2003–2020 ООО «ПАНТУС» Все права защищены</p>
  </div>
</template>

<script>
export default {
  name: 'Footer4',
}
</script>

<style lang="sass">
@import "assets/sass/footer/footer-4"
</style>
