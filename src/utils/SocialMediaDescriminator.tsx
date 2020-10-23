import { SocialMediaType } from 'src/models/person'
import { validEmaliAddress } from './StringValidator'

const descriminateUrl = (url: URL): SocialMediaType | undefined => {
  const { hostname } = url
  if (hostname.includes('youtube')) {
    return 'youtube'
  }
  if (hostname.includes('twitter')) {
    return 'twitter'
  }
  if (hostname.includes('instagram')) {
    return 'instagram'
  }
  if (hostname.includes('facebook')) {
    return 'facebook'
  }
  if (hostname.includes('instagram')) {
    return 'instagram'
  }
  if (hostname.includes('linkedin')) {
    return 'linkedin'
  }
  if (hostname.includes('github')) {
    return 'github'
  }
  if (hostname.includes('zoom')) {
    return 'zoom'
  }
  return 'link'
}

export const descriminate = (
  urlString: string
): SocialMediaType | undefined => {
  if (!urlString.startsWith('https://') && urlString.includes('@')) {
    return 'email'
  }

  try {
    return descriminateUrl(new URL(urlString))
  } catch {
    return undefined
  }
}
export const toHref = (url: string, type: SocialMediaType) => {
  const encoded = encodeURI(url)
  if (type === 'email') return `mailto:${encoded}`
  if (type === 'phone') return `tel:${encoded}`
  return encoded
}

export const isValidLink = (link: string) => {
  if (validEmaliAddress(link)) return true
  try {
    const url = new URL(link)
    if (url.protocol != 'https:') return false
  } catch {
    return false
  }
  return true
}
