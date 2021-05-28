import { TypeProductApi } from '~/interface/products/products-api.interface'
import { TypeProductVuex } from '~/interface/products/products.interface'

export const ProductsMap = (data: TypeProductApi[]): TypeProductVuex[] => {
  const dataset: any[] = []
  if (data.length !== 0) {
    data.forEach((elem) => {
      dataset.push({
        productCard: {
          // Карточка Товара
          id: elem.id, // id Товара
          name: elem.name, // Название товара
          params: {
            // Параметры товара
            measure: elem.params.measure,
            weight: elem.params.weight,
          },
          sku: {
            // Артикул товара
            original: elem.sku.origin, // Оригинал
            normalized: elem.sku.custom, // Ссылка
          },
          productCardImage: {
            url: elem.images.main, // Изображение
          },
          album: [],
          oem: elem.oems, // OEM
          brand: {
            // brand
            id: elem.brand.id,
            name: elem.brand.name,
            deliveryDelay: elem.brand.deliveryDelay,
            code: elem.brand.code,
          },
          categories: [],
          applicabilities: [],
          nomenclature: {
            code: elem.nomenclature?.code,
          },
        },
        productOffer: [],
      })
      if (elem.categories.length !== 0) {
        // Категории
        elem.categories.forEach((data) => {
          dataset[dataset.length - 1].productCard.categories.push({
            id: data.id,
            name: data.name,
          })
        })
      }
      if (elem.applicabilities.length !== 0) {
        // Применяемости
        elem.applicabilities.forEach((data) => {
          dataset[dataset.length - 1].productCard.applicabilities.push({
            id: data.id,
            name: data.name,
          })
        })
      }
      if (elem.images.extra.length !== 0) {
        // Альбом товара
        elem.images.extra.forEach((data) => {
          dataset[dataset.length - 1].images.extra.push({ url: data })
        })
      }
      elem.offers.forEach((data) => {
        // Предложение Товара
        dataset[dataset.length - 1].productOffer.push({
          id: data.id,
          prices: data.price,
          quantity: data.quantity,
          supplier: {
            name: data.supplier.name,
            deliveryDelay: data.supplier.deliveryDelay,
          },
          multiplicity: data.supplier.orderMultiplicity,
        })
      })
    })
  }
  return dataset
}
