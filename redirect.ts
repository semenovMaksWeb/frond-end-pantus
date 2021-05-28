import axios from 'axios'

// const brand = async () => {
//   const elem: any = []
//   const { data } = await axios.get('https://api.pantus.ru/product_brands')
//   data.forEach((brand: any) => {
//     elem.push({
//       from: '^/brands/' + brand.code + '$',
//       to: `/brands/${brand.id}/${brand.code}`,
//     })
//   })
//   return elem
// }
// const categories = async () => {
//   const elem: any = []
//   const categoriesApi = await axios.get('https://api.pantus.ru/news/categories')
//
//   categoriesApi.data.forEach((categories: any) => {
//     elem.push({
//       from: '^/news/' + categories.code + '$',
//       to: `/news/categories/${categories.id}/${categories.code}`,
//     })
//   })
//   return elem
// }

const redirect = [
  { from: '^/search-result', to: '/search' },
  { from: '^/search-result/bestsellers', to: '/popular' },
  {
    from: '^/avtozapchasti/(.*)$',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    to: (from: any, req: any) => {
      const param = req.url.match(/avtozapchasti\/(.*)$/)[1]
      return `/products/${param}`
    },
  },
]
module.exports = redirect
