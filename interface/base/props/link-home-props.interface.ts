import { LinkPropsInterface } from '~/interface/base/props/link-props.interface'

export interface LinkHomePropsInterface {
  img?: {
    url: string
    class?: string
    alt: string
  }
  className?: string
  linkMain: LinkPropsInterface
  linkDon?: LinkPropsInterface[]
}
