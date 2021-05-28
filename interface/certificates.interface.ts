export enum CertificatesOrientationInterface {
  portrait = 'portrait',
  landscape = 'landscape',
}
export interface CertificatesInterface {
  id: number
  code: string
  description: string
  img: string
  orientation: CertificatesOrientationInterface
}
export interface CertificatesApiInterface {
  id: number
  code: string
  description: string
  img: string
  orientation: CertificatesOrientationInterface
}
