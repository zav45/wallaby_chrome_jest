import {SomeClass} from "./SomeClass.js"

describe('Test SomeClass', () => {
  let someClass

  it('init SomeClass', () => {
    someClass = new SomeClass()
  })

  it('use SomeClass.method1', () => {
    someClass.method1()
  });

  it('use SomeClass.method2', () => {
    someClass.method2()
  });

})
