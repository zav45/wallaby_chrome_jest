import {SomeClass2} from "./SomeClass2.js"

describe('Test SomeClass2', () => {
  let someClass2

  it('init SomeClass2', () => {
    someClass2 = new SomeClass2()
  })

  it('use SomeClass2.method1', () => {
    someClass2.method1()
  });

  it('use SomeClass2.method2', () => {
    someClass2.method2()
  });

})
