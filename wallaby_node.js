export default function () {
  return {
    env: {
      type: 'node',
      params: {
        runner: '--experimental-vm-modules --trace-warnings'
      }
    },

    runAllTestsInAffectedTestFile: true,
    // runMode: 'onsave',

    testFramework: {
      configFile: './jest.config.wallaby.js',
      // path: '/usr/lib/node_modules'
    }
  }
};
