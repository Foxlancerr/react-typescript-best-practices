/**
 * It's actually possible to change things in the global namespace
 * in TypeScript.
 *
 * 1. Add a declaration for React.MyInterface to the global React
 * namespace below.
 */

// used this syntax we can add custom interfaces in react library
declare global {
  namespace React {
    interface MySolutionInterface {
      foo: string;
    }
    type buzz = {
      name: string;
      id: number;
    };
  }
}
const obj1: React.MySolutionInterface = { foo: "foo" };
console.log(obj1);
const obj2: React.buzz = { id: 23, name: "buzz" };
console.log(obj2);

export {};
