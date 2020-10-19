import * as React from 'react'
import { CSSProperties } from 'styled-components'

interface ImageOverlayProps {
  style?: CSSProperties
}
export const ImageOverlay: React.FC<ImageOverlayProps> = ({
  style = { width: '100%', height: '50%' },
}) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div
        style={{
          background: `linear-gradient(0deg, rgba(31, 31, 31, 0), rgba(5, 16, 38, 1))`,
          ...style,
        }}
      ></div>
      <div
        style={{
          background: `linear-gradient(0deg,  rgba(5, 16, 38, 1), rgba(31, 31, 31, 0))`,
          ...style,
        }}
      ></div>
    </div>
  )
}
