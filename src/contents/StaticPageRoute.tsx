import { navigate } from 'gatsby'
import React,{lazy} from 'react'
import { SctlPage } from './sctl/SctlPage'

const AboutPage = lazy(() => import('./about/AboutPage'));
const CompanyPage = lazy(() => import('./company/company'));
const FAQPage = lazy(() => import('./faq/FAQ'));
const PrivacyPolicyPage = lazy(() => import('./privacypolicy/privacypolicy'));
const SignUpLayout = lazy(() => import('./SignUp'));
const SocialSigninLayout = lazy(() => import('./SocialSignIn'));
const ConfirmSignUpLayout = lazy(() => import('./callback/ConfirmSignUp'));
const ResetPasswordLayout = lazy(() => import('./callback/ResetPassword'));

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
