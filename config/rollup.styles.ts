import { RollupOptions } from 'rollup';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const config: RollupOptions[] = [
  {
    input: 'src/index.scss',
    output: [{ file: 'dist/index.css' }],
    plugins: [
      postcss({
        extract: true,
        inject: false,
        plugins: [autoprefixer()]
      })
    ],
    // This is a hacky way to deal with strange problem with the css files.
    onwarn(warning, warn) {
      if (warning.code === 'FILE_NAME_CONFLICT') return;
      warn(warning);
    }
  },
  {
    input: 'src/reset.scss',
    output: [{ file: 'dist/reset.min.css' }],
    plugins: [
      postcss({
        extract: true,
        minimize: true,
        inject: false,
        plugins: [autoprefixer()]
      })
    ],
    onwarn(warning, warn) {
      if (warning.code === 'FILE_NAME_CONFLICT') return;
      warn(warning);
    }
  }
];

export default config;
