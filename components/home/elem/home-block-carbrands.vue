<template>
  <div class="home-block__carbrands box-shadow" :class="link.className">
    <nuxt-link
      :to="link.linkMain.to"
      :active-class="link.linkMain.activeClass"
      :class="link.linkMain.class"
      class="link link-hover-main home-link__carbrands"
      >{{ link.linkMain.text }}
    </nuxt-link>
    <div class="row-gutters">
      <div class="home-wrapper__children__carbrands">
        <nuxt-link
          v-for="(linkId, index) in link.linkDon"
          :key="index"
          :to="linkId.to"
          :class="linkId.class"
          :active-class="linkId.activeClass"
          class="home-link__children__carbrands"
        >
          {{ linkId.text }}
        </nuxt-link>
      </div>
      <v-lazy-image
        v-if="link.img"
        :src="link.img.url"
        :alt="link.img.alt"
        class="img home-block-img"
        :class="link.img.class"
        :src-placeholder="require('@/assets/img/Ajux_loader.gif')"
      />
      <a v-if="link.img" :href="link.img.url" @click.prevent=""></a>
    </div>
  </div>
</template>

<script lang="ts">
import VLazyImage from 'v-lazy-image'
import { PropType } from 'vue'
import { LinkHomePropsInterface } from '~/interface/base/props/link-home-props.interface'

export default {
  name: 'HomeBlockCarbrands',
  components: {
    VLazyImage,
  },
  props: {
    link: {
      type: Object as PropType<LinkHomePropsInterface>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/home/block-carbrands"
</style>
