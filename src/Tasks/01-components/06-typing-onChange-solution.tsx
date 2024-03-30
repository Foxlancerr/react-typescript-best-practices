interface Car {
  brand: string;
  model: number;
  price: number;
  engine: string;
}

// here the omit will take all the properties of the car except the engine
type TCycle = Omit<Car, "engine">;
// when we hover it it look like
// type TCycle = {
//   brand: string;
//   model: number;
//   price: number;
// };
type TSmallCycle = Omit<Car, "brand" | "engine">;
//  when we hover it it look like
// type TSmallCycle = {
//   model: number;
//   price: number;
// }
import { ComponentProps } from "react";
import { Equal, Expect } from "../../helpers/type-utils";

//way 1 using type-allias
type OmitApply = Omit<ComponentProps<"input">, "onChange">;
type IInputProps = OmitApply & {
  onChange: (value: string) => void;
};

// way2 using interfaces
interface IInputProps2 extends Omit<ComponentProps<"input">, "onChange"> {
  onChange: (value: string) => void;
}

const Input = (props: IInputProps2) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      placeholder="type here"
      className="px-3 py-2 bg-blue-300 mt-10"
      onChange={(e) => {
        console.log(e);
        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};

export default Parent;
