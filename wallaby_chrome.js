export default function (wallaby) {
  return {

    files: [
      '!*.test.js',
      '*.js',
    ],

    tests: [
      '*.test.js',
    ],

    env: {
      kind: 'chrome'
    },

    runAllTestsInAffectedTestFile: true,

    setup(wallaby) {
      wallaby.testFramework.getEnv().configure({ random: false });
    }

    // runMode: 'onsave',
    // trace: true,

    // workers: {
    //   initial: 1,
    //   regular: 1,
    //   // restart: true
    // }
  }
};
