/*module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/fileTransformer.cjs',
      },
}*/

module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'node',
   /* globals: {
        'ts-jest': {
            tsconfig: '<rootDir>./tsconfig.json',
        },
    },*/
    transform: {
        "<transform_regex>": ['ts-jest', { tsconfig: '<rootDir>./tsconfig.json', }],},

    "transform": {
        "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
      },
      "transformIgnorePatterns": [
        "node_modules/(?!variables/.*)"
      ]
  };
  
