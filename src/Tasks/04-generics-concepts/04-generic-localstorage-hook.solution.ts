import { Equal, Expect } from "../../helpers/type-utils";

/**
 * In this exercise, we want to create a generic useLocalStorage hook
 * that allows us to store and retrieve values in localStorage.
 *
 * The way we're going to do this is by asking users to pass in type
 * arguments, as below:
 *
 * const user = useLocalStorage<{ name: string }>("user");
 *
 * user.set("matt", { name: "Matt" });
 *
 * 1. Figure out a way to make this work using generics.
 */
export const useLocalStorage = <T>() => {
  return {
    get: (key: string): T | null => {
      console.log(key);
      return JSON.parse(window.localStorage.getItem(key) || "null");
    },
    set: (key: string, value: T) => {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
  };
};

export default function Parent() {
  const user = useLocalStorage<{ name: string; age: number }>();
  console.log(user);
  console.log(user.set("Matt", { name: "Matt", age: 40 }));
  console.log(user.get("Matt"));

  const user2 = useLocalStorage<{ name: string; age: number }>();
  console.log(user2);
  console.log(user2.set("Ajay", { name: "Ajay", age: 30 }));
  console.log(user2.get("Ajay"));
}
// export const useLocalStorage = <T>(prefix: string) => {
//   return {
//     get: (key: string): T | null => {
//       console.log(prefix + key)
//       return JSON.parse(window.localStorage.getItem(prefix + key) || "null");
//     },
//     set: (key: string, value: T) => {
//       window.localStorage.setItem(prefix + key, JSON.stringify(value));
//     },
//   };
// };

// export default function Parent() {
//   const user = useLocalStorage<{ name: string; age: number }>("user");
//   console.log(user);
//   console.log(user.set("Matt", { name: "Matt",age:40 }));
//   console.log(user.get("Matt"));
// }
