module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          // Common
          '@Constants': './src/common/constants',
          '@Components': './src/common/components',
          '@Services': './src/common/services',
          '@Hooks': './src/common/hooks',
          '@Utils': './src/common/utils',
          '@Navigations': './src/common/navigations',
          '@Types': './src/common/types',
          '@Stores': './src/common/stores',

          // Features
          '@Registration': './src/features/Registration',
          '@User': './src/features/User',
          '@Report': './src/features/Report',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
