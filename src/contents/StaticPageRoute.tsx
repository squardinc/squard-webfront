import { navigate } from 'gatsby'
import React from 'react'
import { AboutPage } from './about/AboutPage'
import { ConfirmSignUpLayout } from './callback/ConfirmSignUp'
import { ResetPasswordLayout } from './callback/ResetPassword'
import { SocialSigninLayout } from './callback/SocialSignIn'
import { SocialSignOutLayout } from './callback/SocialSignOut'
import { CompanyPage } from './company/company'
import { FAQPage } from './faq/FAQ'
import { PrivacyPolicyPage } from './privacypolicy/privacypolicy'
import { SctlPage } from './sctl/SctlPage'
import { SignUpLayout } from './SignUp'
import { TermsOfUsePage } from './termsofuse/TermsOfUsePage'

export const StaticPagePaths = [
  'about',
  'company',
  'faq',
  'privacypolicy',
  'sctl',
  'termsofuse',
  'signup',
  'confirmSignUp',
  'resetPassword',
  'socialSignIn',
  'socialSignOut',
] as const

export type StaticPageType = typeof StaticPagePaths[number]

const StaticPageMap: { [key in StaticPageType]: React.FC } = {
  about: AboutPage,
  company: CompanyPage,
  faq: FAQPage,
  privacypolicy: PrivacyPolicyPage,
  sctl: SctlPage,
  termsofuse: TermsOfUsePage,
  signup: SignUpLayout,
  confirmSignUp: ConfirmSignUpLayout,
  resetPassword: ResetPasswordLayout,
  socialSignIn: SocialSigninLayout,
  socialSignOut: SocialSignOutLayout,
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

export default StaticPageRoute
