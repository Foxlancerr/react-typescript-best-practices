import { Reducer, useReducer } from "react";
import { Equal, Expect } from "../../helpers/type-utils";

// way 1
// function Parent() {
//   const reducer = (
//     state: {
//       count: number;
//     },
//     action:
//       | {
//           type: "add";
//           add: number;
//         }
//       | {
//           type: "subtract";
//           subtract: number;
//         }
//   ) => {
//     switch (action.type) {
//       case "add":
//         return { count: state.count + action.add };
//       case "subtract":
//         return { count: state.count - action.subtract };
//       default:
//         throw new Error();
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   type tests = [Expect<Equal<typeof state.count, number>>];

//   return (
//     <div className="flex justify-center items-center flex-col">
//       <h1>{state?.count}</h1>
//       <button
//         className="w-[100px] py-2 bg-blue-500 text-white"
//         onClick={() =>
//           dispatch({
//             type: "add",
//             add: 1,
//           })
//         }
//       >
//         Add
//       </button>
//       <button
//         className="w-[100px] py-2 text-white bg-red-500"
//         onClick={() =>
//           dispatch({
//             type: "subtract",
//             subtract: 1,
//           })
//         }
//       >
//         Subtract
//       </button>
//     </div>
//   );
// }
// export default Parent;

// way2
// type TActionProps =
//   | {
//       type: "add";
//       add: number;
//     }
//   | {
//       type: "subtract";
//       subtract: number;
//     };

// interface IStateProps {
//   count: number;
// }
// function Parent() {
//   const reducer = (state: IStateProps, action: TActionProps) => {
//     switch (action.type) {
//       case "add":
//         return { count: state.count + action.add };
//       case "subtract":
//         return { count: state.count - action.subtract };
//       default:
//         throw new Error();
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   type tests = [Expect<Equal<typeof state.count, number>>];

//   return (
//     <div className="flex justify-center items-center flex-col">
//       <h1>{state?.count}</h1>
//       <button
//         className="w-[100px] py-2 bg-blue-500 text-white"
//         onClick={() =>
//           dispatch({
//             type: "add",
//             add: 1,
//           })
//         }
//       >
//         Add
//       </button>
//       <button
//         className="w-[100px] py-2 text-white bg-red-500"
//         onClick={() =>
//           dispatch({
//             type: "subtract",
//             subtract: 1,
//           })
//         }
//       >
//         Subtract
//       </button>
//     </div>
//   );
// }

// export default Parent;
type TActionProps =
  | {
      type: "add";
      add: number;
    }
  | {
      type: "subtract";
      subtract: number;
    };
interface IStateProps {
  count: number;
}
function Parent() {
  const reducer: Reducer<IStateProps, TActionProps> = (state, action) => {
    switch (action.type) {
      case "add":
        return { count: state.count + action.add };
      case "subtract":
        return { count: state.count - action.subtract };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  type tests = [Expect<Equal<typeof state.count, number>>];

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
