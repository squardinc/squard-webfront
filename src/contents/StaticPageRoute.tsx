import { navigate } from 'gatsby'
import * as React from 'react'
import { AboutPage } from './about/AboutPage'
import { ConfirmSignUpLayout } from './callback/ConfirmSignUp'
import { ResetPasswordLayout } from './callback/ResetPassword'
import { CompanyPage } from './company/company'
import { FAQPage } from './faq/FAQ'
import { PrivacyPolicyPage } from './privacypolicy/privacypolicy'
import { SctlPage } from './sctl/SctlPage'
import { SignUpLayout } from './SignUp'
import { SocialSigninLayout } from './SocialSignIn'

export const StaticPagePaths = [
  'about',
  'company',
  'faq',
  'privacypolicy',
  'sctl',
  'signup',
  'confirmSignUp',
  'resetPassword',
  'socialSignIn',
] as const

type StaticPageType = typeof StaticPagePaths[number]

const StaticPageMap: { [key in StaticPageType]: React.FC } = {
  about: AboutPage,
  company: CompanyPage,
  faq: FAQPage,
  privacypolicy: PrivacyPolicyPage,
  sctl: SctlPage,
  signup: SignUpLayout,
  confirmSignUp: ConfirmSignUpLayout,
  resetPassword: ResetPasswordLayout,
  socialSignIn: SocialSigninLayout,
}

interface StaticPageRouteProps {
  contentId: StaticPageType | string
}
export const StaticPageRoute: React.FC<StaticPageRouteProps> = ({ contentId }) => {
  const StaticPage = StaticPageMap[contentId]
  if (StaticPage) {
    return <StaticPage />
  }
  navigate('/')
  return <></>
}
