import {terser} from "rollup-plugin-terser";

export default {
  input: 'build/md5.js',
  plugins: [terser()],
  output: [{
    file: 'dist/index.js',
    format: 'cjs',
  },
  {
    file: 'dist/index.esm.js',
    format: 'esm'
  }]
};