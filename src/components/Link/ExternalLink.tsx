import * as React from 'react'

interface ExternalLinkProps {
  href?: string
  className?: string
}
export const ExternalLink: React.FC<ExternalLinkProps> = ({ children, href, className = '' }) => {
  if (!href) {
    return <>{children}</>
  }
  return (
    <a href={encodeURI(href)} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

export default ExternalLink
