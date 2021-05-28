<template>
  <div class="row-gutters product-table-thead">
    <template v-if="check">
      <div class="product-table-th product-table-brands">Бренд</div>
      <div class="product-table-th product-table-sku">Артикуль</div>
      <div class="product-table-th product-table-img">Фото</div>
      <div class="product-table-th product-table-name">Название</div>
      <div class="product-table-th product-table-supplier-th">Поставщик</div>
      <div class="product-table-th product-table-offers-th">Наличие</div>
      <div class="product-table-th product-table-offers-th">Срок</div>
      <div class="product-table-th product-table-offers-th">Цена</div>
    </template>
    <div class="product-table-th product-table-panel-th">
      <table-panel />
    </div>
  </div>
</template>

<script>
import TablePanel from '~/components/search/filter-product/element/table-panel'
export default {
  name: 'ProductTableHead',
  components: { TablePanel },
  props: {
    check: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
