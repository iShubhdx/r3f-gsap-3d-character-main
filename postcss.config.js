// postcss.config.js

import postcssPresetMantine from 'postcss-preset-mantine';
import postcssSimpleVars from 'postcss-simple-vars';

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // 'postcss-preset-mantine': postcssPresetMantine(),
    // 'postcss-simple-vars': postcssSimpleVars({
    //   variables: {
    //     'mantine-breakpoint-xs': '36em',
    //     'mantine-breakpoint-sm': '48em',
    //     'mantine-breakpoint-md': '62em',
    //     'mantine-breakpoint-lg': '75em',
    //     'mantine-breakpoint-xl': '88em',
    //   },
    // }),
  },
};
