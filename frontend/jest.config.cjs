module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',  // This tells Jest to use Babel for JS/JSX files
      '^.+\\.scss$': 'jest-transform-stub',  // This mocks SCSS files
      '^.+\\.(jpg|jpeg|png|gif|svg)$': 'jest-transform-stub',  // This mocks image files
    },
    moduleFileExtensions: ['js', 'jsx'],  // Add 'jsx' as a valid extension
    testEnvironment: 'jest-environment-jsdom',
  };
  