module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {},
    maxWidth: {
      xs: '480px',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      default: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.8rem',
      'full': '9999px'
    }
  },
  variants: {},
  plugins: [],
}
