export default function () {
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
    // runMode: 'onsave',
    // trace: true,

    // workers: {
    //   initial: 1,
    //   regular: 1,
    //   // restart: true
    // }
  }
};
