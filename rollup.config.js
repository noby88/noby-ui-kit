import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

const plugins = [
  external(),
  resolve(),
  typescript({
    rollupCommonJSResolveHack: true,
    exclude: '**/__tests__/**',
    clean: true,
  }),
  commonjs({
    include: ['node_modules/**'],
    namedExports: {
      'node_modules/react/react.js': [
        'Children',
        'Component',
        'PropTypes',
        'createElement',
      ],
      'node_modules/react-dom/index.js': ['render'],
      'node_modules/react/index.js': [
        'useContext',
        'useState',
        'useMemo',
        'useEffect',
        'useRef',
        'useDebugValue',
        'createElement',
        'useCallback',
      ],
      'node_modules/react-is/index.js': [
        'typeOf',
        'isElement',
        'isValidElementType',
      ],
      'node_modules/react/jsx-runtime.js': ['jsx', 'jsxs'],
    },
  }),
];

const config = {
  input: 'src/lib/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: plugins,
};

export default config;
