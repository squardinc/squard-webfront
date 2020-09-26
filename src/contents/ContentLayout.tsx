import * as React from 'react'
import { AboutPage } from './about/AboutPage'
import { CompanyPage } from './company/company'
import { FAQPage } from './faq'
import { PrivacyPolicyPage } from './privacypolicy/privacypolicy'
import { TeamLayout } from './team/TeamLayout'
import { PersonLayout } from './person/PersonLayout'
import { SignUpLayout } from './SignUp'

export const StaticPagePaths = [
  'about',
  'company',
  'faq',
  'privacypolicy',
  'signup'
] as const

type StaticPageType = typeof StaticPagePaths[number]

interface ContentLayoutProps {
  path: string
  contentId: StaticPageType | string
}
export const ContentLayout: React.FC<ContentLayoutProps> = ({ contentId }) => {
  switch (contentId) {
    case 'about':
      return <AboutPage />
    case 'company':
      return <CompanyPage />
    case 'faq':
      return <FAQPage />
    case 'privacypolicy':
      return <PrivacyPolicyPage />
    case 'signup':
      return <SignUpLayout />
  }
  if (contentId === 'squard') {
    return <TeamLayout />
  }
  return <PersonLayout />
}
