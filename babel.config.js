module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        '@babel/plugin-transform-class-properties',
        {
          loose: true, // loose modunu etkinleştiriyoruz
        },
      ],
      [
        '@babel/plugin-transform-private-methods',
        {
          loose: true, // loose modunu etkinleştiriyoruz
        },
      ],
      [
        '@babel/plugin-transform-private-property-in-object',
        {
          loose: true, // loose modunu etkinleştiriyoruz
        },
      ],
      ['react-native-reanimated/plugin'],
    ],
  };
  