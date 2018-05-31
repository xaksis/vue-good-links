const { version } = require('./package');

const banner = `/**
 * vue-good-links v${version}
 * (c) 2018-present xaksis <shay@crayonbits.com>
 * https://github.com/xaksis/vue-good-links
 * Released under the MIT License.
 */
`;

module.exports = {
  name: 'vue-good-links',
  banner,
  format: [
    'cjs',
    'es',
    'umd',
    'umd-min',
  ],
  compress: 'umd',
  plugins: ['vue'],
  vue: {
    css: true,
  },
  buble: {
    transforms: {
      generator: true,
      dangerousForOf: true,
    },
  },
};
