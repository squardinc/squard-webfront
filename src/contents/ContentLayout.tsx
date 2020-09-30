import * as React from 'react'
import { AboutPage } from './about/AboutPage'
import { CompanyPage } from './company/company'
import { FAQPage } from './faq/FAQ'
import { PrivacyPolicyPage } from './privacypolicy/privacypolicy'
import { TeamLayout } from './team/TeamLayout'
import { SignUpLayout } from './SignUp'
import { ConfirmSignUpLayout } from './callback/ConfirmSignUp'
import { ResetPasswordLayout } from './callback/ResetPassword'
import { PersonalLayoutContainer } from '../containers/pages/PersonLayout'

export const StaticPagePaths = [
  'about',
  'company',
  'faq',
  'privacypolicy',
  'signup',
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
    case 'confirmSignUp':
      return <ConfirmSignUpLayout />
    case 'resetPassword':
      return <ResetPasswordLayout />
  }
  if (contentId === 'squard') {
    return <TeamLayout />
  }
  return <PersonalLayoutContainer />
}
