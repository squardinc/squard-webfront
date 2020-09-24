import * as React from 'react'
import { AboutPage } from './about/AboutPage'
import { CompanyPage } from './company'
import { FAQPage } from './faq'
import { PrivacyPolicyPage } from './privacypolicy'
import { TeamLayout } from './team/TeamLayout'
import { PersonLayout } from './person/PersonLayout'
import { JoinPage } from './join'

interface ContentLayoutProps {
  path: string
  contentId: string
}
export const ContentLayout: React.FC<ContentLayoutProps> = ({ contentId }) => {
  switch (contentId) {
    case 'about':
      return <AboutPage />
    case 'company':
      return <CompanyPage />
    case 'join':
      return <JoinPage />
    case 'faq':
      return <FAQPage />
    case 'privacypolicy':
      return <PrivacyPolicyPage />
  }
  if (contentId === 'squard') {
    return <TeamLayout />
  }
  return <PersonLayout />
}