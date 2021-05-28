<template>
  <section class="section5">
    <div class="container">
      <div class="row">
        <div class="section5-catalog col">
          <h2 class="h2">
            <nuxt-link to="" class="link link-hover-main"
              >Оригинальные каталоги
            </nuxt-link>
          </h2>
          <img
            class="section5-img img"
            src="https://bx.pantus.ru/bitrix/templates/main/img/home/zapchasti.png"
            alt=""
          />
        </div>
        <div class="section5-brands col">
          <h2 class="h2">
            <nuxt-link to="/brands" class="link link-hover-main section5-brands-link"
              >Бренды запчастей
            </nuxt-link>
          </h2>
          <div v-for="(row, index) in link" :key="'row-' + index" class="row">
            <div
              v-for="elem in row"
              :key="'elem-' + elem.id"
              class="section5-items-brands col"
            >
              <nuxt-link class="link link-hover-main" :to="elem.to">
                {{ elem.text }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Section5 } from '~/composition/home/section/section-5'

export default {
  name: 'Section5',
  setup() {
    return { ...Section5() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/home/section/section5"
</style>
