import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  CertificatesInterface,
  CertificatesApiInterface,
} from '~/interface/certificates.interface'
export const CertificatesAxios = async (
  $axios: NuxtAxiosInstance
): Promise<CertificatesInterface[]> => {
  const { data } = await $axios.get(
    `${process.env.api}/product_brands/certificates`
  )
  return CertificatesMap(data)
}
const CertificatesMap = (
  data: CertificatesApiInterface[]
): CertificatesInterface[] => {
  const res: CertificatesInterface[] = []
  data.forEach((elem) => {
    res.push({
      id: elem.id,
      code: elem.code,
      description: elem.description,
      img: elem.img,
      orientation: elem.orientation,
    })
  })
  return res
}
