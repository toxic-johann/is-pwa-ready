const path = require('path');
module.exports = () => ({
  plugins: {
    'postcss-import': {
      path: [ path.resolve('./fesrc') ],
      resolve(id) {
        return id.match(/^\//)
          ? path.resolve('./client') + id
          : id;
      },
    },
    precss: {},
    'postcss-cssnext': {},
  },
});
