module.exports = {
  rootDir: '../../',
  roots: [
    '<rootDir>/test'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testRegex: '/test/.*\\.(ts|tsx|js)$',
  transform: {
    '\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};


