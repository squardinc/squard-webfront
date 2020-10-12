import styled, { css } from 'styled-components'

export const colorFilters = {
    red: css`
        filter: 
            grayscale(100%) 
            brightness(50%) 
            sepia(100%) 
            hue-rotate(-70deg) 
            saturate(500%) 
            contrast(0.8);
        `,
    blue: css`
        filter: 
            grayscale(100%) 
            brightness(50%) 
            sepia(100%) 
            hue-rotate(-205deg) 
            saturate(1000%) 
            contrast(0.7);
        `,
    green: css`
        filter: 
            grayscale(100%) 
            brightness(50%) 
            sepia(100%) 
            hue-rotate(120deg) 
            saturate(1000%) 
            contrast(0.8);
        `,
    yellow: css`
        filter: 
            grayscale(90%) 
            brightness(80%) 
            sepia(90%) 
            hue-rotate(5deg) 
            saturate(500%) 
            contrast(0.8);
        `,
}

export const personIcon = ({
    maxWidth = "120px",
    height = "120px",
    radius = "20px",
    width = "100%",
    minWidth = "100%",
}) => css`
  margin: 5px 0px;
  max-width: ${maxWidth};
  height: ${height};
  width: ${width};
  min-width: ${minWidth};
  border-radius: ${radius};
  object-fit: cover;
  object-position: 50% 0%;
`