module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.ts', './src/**/*.tsx'],
  theme: {
    important: true,
    extend: {
      colors: {
        'theme-text-main': 'var(--text-color-theme-main)',
        'theme-text-sub': 'var(--text-color-theme-sub)',
        'theme-bg-main': 'var(--bg-color-theme-main)',
        'theme-text-header': 'var(--text-color-theme-header)',
        'theme-bg-header': 'var(--bg-color-theme-header)',
        black: '#051026',
        yellow: '#FBE62E',
      },
      fontFamily: {
        sans: ['Noto Sans CJK JP', 'sans-serif'],
        monts: ['Montserrat', 'sans-serif'],
        body: ['Noto Sans CJK JP', 'sans-serif'],
      },
    },
    maxWidth: {
      xs: '480px',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.8rem',
      full: '9999px',
    },
  },
  variants: {},
  plugins: [],
}
