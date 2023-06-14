module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
   plugins: ['react-native-reanimated/plugin'],
  // plugins: [
  //           'react-native-reanimated/plugin', {
  //               relativeSourceLocation: true,
  //           },
  //       ],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};
