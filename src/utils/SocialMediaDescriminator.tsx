import { SocialMediaType } from 'src/models/person'
export const descriminate = (urlString: string): SocialMediaType => {
  if (!urlString.startsWith('https://')) {
    return urlString.includes('@') ? 'email' : 'phone'
  }
  const url = new URL(urlString)
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
export const toHref = (url: string, type: SocialMediaType) => {
  const encoded = encodeURI(url)
  if (type === 'email') return `mailto:${encoded}`
  if (type === 'phone') return `tel:${encoded}`
  return encoded
}
