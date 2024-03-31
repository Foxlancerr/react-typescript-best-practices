import { useCallback } from "react";
import { Equal, Expect } from "../../helpers/type-utils";


const Buttons = (props: { id: string }) => {
  const onClick = useCallback(
    (buttonName: string) => {
      console.log(props.id, buttonName);
    },
    [props.id]
  );

  type test = Expect<Equal<typeof onClick, (buttonName: string) => void>>;

  return (
    <div>
      <button onClick={() => onClick("A")}>A</button>
      <button onClick={() => onClick("B")}>B</button>
      <button onClick={() => onClick("C")}>C</button>
    </div>
  );
};

export default function Parent() {
  return <Buttons id="1"></Buttons>;
}
