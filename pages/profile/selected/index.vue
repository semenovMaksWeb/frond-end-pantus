<template>
  <div class="container">
    <div class="row">
      <ProfileNav />
      <div class="col favorites-product">
        <h1 class="h1">Избранные товары</h1>
        <products-view-blog :product="getFavorites" />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileNav from '~/components/profile/profile-nav'
import { PageFavorites } from '~/composition/favorites/page-favorites'
import ProductsViewBlog from '~/components/products/view/products-view-blog'
export default {
  name: 'SelectedPage',
  components: { ProductsViewBlog, ProfileNav },
  middleware: 'check-user-guest',
  setup() {
    return { ...PageFavorites() }
  },
}
</script>

<style lang="sass">
@import 'assets/sass/favorites/favorites.sass'
</style>
