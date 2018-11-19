interface SomethingInterface {
  test: boolean;
}

function doSomething(something: SomethingInterface): string {
  return something.test.toString();
}

console.log(doSomething({ test: true }));
