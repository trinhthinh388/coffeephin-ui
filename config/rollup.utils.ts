import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import { RollupOptions } from 'rollup';

const config: RollupOptions[] = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/__tests__', '**/*.test.ts', '**/*.test.tsx']
      }),
      filesize()
    ]
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'cjs' }],
    plugins: [dts()],
    external: /\.scss$/
  }
];

export default config;
