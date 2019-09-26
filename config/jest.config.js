const jestConfig = {
    verbose: true,
    testMatch: [
        "<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}",
        "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
      ],
  }
  
  module.exports = jestConfig