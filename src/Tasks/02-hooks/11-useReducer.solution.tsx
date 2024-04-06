import { useReducer } from "react";
import { Equal, Expect } from "../../helpers/type-utils";

interface IReducerProps {
  state: {
    count: number;
  };
  action:
    | {
        type: "add" | "subtract";
        add: number;
      }
    | {
        type: "add" | "subtract";
        subtract: number;
      };
}
function Parent() {
  const reducer = (
    state: {
      count: number;
    },
    action:
      | {
          type: "add";
          add: number;
        }
      | {
          type: "subtract";
          subtract: number;
        }
  ) => {
    switch (action.type) {
      case "add":
        return { count: state.count + action.add };
      case "subtract":
        return { count: state.count - action.subtract };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  type tests = [Expect<Equal<typeof state.count, number>>];

  // dispatch({ type: "add", add: 1 });

  // dispatch({ type: "subtract", subtract: 1 });

  // dispatch({ type: "add", add: 3 });

  // dispatch({ type: "subtract", subtract: 123 });

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>{state?.count}</h1>
      <button
        className="w-[100px] py-2 bg-blue-500 text-white"
        onClick={() =>
          dispatch({
            type: "add",
            add: 1,
          })
        }
      >
        Add
      </button>
      <button
        className="w-[100px] py-2 text-white bg-red-500"
        onClick={() =>
          dispatch({
            type: "subtract",
            subtract: 1,
          })
        }
      >
        Subtract
      </button>
    </div>
  );
}

export default Parent;
