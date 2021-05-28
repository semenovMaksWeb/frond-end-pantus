<template>
  <div class="orders-page-id-params">
    <div class="order-page-id-name">
      Заказ {{ getOrderId.id }} от {{ getOrderId.date }}
    </div>
    <orders-params name="Текущий статус:" :value="getOrderId.status.name" />
    <orders-params name="Цена:" :value="getOrderId.price + ' ₽'" />
    <b class="orders-page-id-title">Параметры заказа</b>
    <orders-params
      name="Тип плательщика:"
      :value="getOrderId.paySystemType.name"
    />
    <b class="orders-page-id-title">Контактное лицо</b>
    <orders-params name="Фамилия:" :value="getOrderId.user.surname" />
    <orders-params name="Имя:" :value="getOrderId.user.name" />
    <orders-params name="Мобильный телефон:" :value="getOrderId.user.phone" />
    <orders-params name="Город:" :value="getOrderId.address.city" />
    <orders-params name="Адрес:" :value="getOrderId.address.detailed" />
    <b class="orders-page-id-title">Параметры доставки и оплаты</b>
    <orders-params
      name="Платёжная система:"
      :value="getOrderId.paySystem.name"
    />
    <orders-params
      name="Служба доставки:"
      :value="getOrderId.delivery.service.name"
    />
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import OrdersParams from '~/components/orders/orders-params.vue'
import { OrdersIdInterface } from '~/interface/orders/orders-id.interface'
export default {
  name: 'OrderParamsAll',
  components: { OrdersParams },
  props: {
    getOrderId: {
      type: Object as PropType<OrdersIdInterface>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/order/page/order-params-all"
</style>
