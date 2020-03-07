const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
        transitionProperty: {
            'width': 'width',
        },
        maxHeight: {
            '64': '16rem',
        }
    },
  },
  variants: {
      borderWidth: ['focus'],
      borderColor: ['responsive', 'hover', 'focus', 'checked'],
      backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
      backgroundPosition: ['responsive', 'checked'],
      backgroundRepeat: ['responsive', 'checked'],
  },
  plugins: [
      plugin(function({ addVariant, e }) {
          addVariant('checked', ({ modifySelectors, separator }) => {
              modifySelectors(({ className }) => {
                  return `.${e(`checked${separator}${className}`)}:checked`
              })
          })
      })
  ],
};
