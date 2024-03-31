import { Equal, Expect } from "../../helpers/type-utils";


const nullAsRef = (
  <div
    ref={{
      current: null,
    }}
  ></div>
);

// Legacy refs are supported!
const stringAsRef = <div ref={"legacyRef"}></div>;

const undefinedAsRef = (
  <div
    ref={{
      // Type 'undefined' is not assignable to
      // type 'HTMLDivElement | null'.
      current: undefined,
    }}
  ></div>
);


// Callback refs are supported via RefCallback<T>
const Parent = (
  <div
    ref={(htmlDivElement) => {
      type test = Expect<Equal<typeof htmlDivElement, HTMLDivElement | null>>;
    }}
  ></div>
);

export default Parent;
