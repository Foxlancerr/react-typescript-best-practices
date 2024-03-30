import React from "react";

// way 1 to fix it using Type-Allias
type TProps = {
  className: string;
};

export const Button1 = (props: TProps) => {
  return <button className={props.className}>Hi {props.className}</button>;
};

// way 2 to fix it using Interface
interface IProps {
  className: string;
}

export const Button2 = (props: IProps) => {
  return <button className={props.className}>Hi {props.className}</button>;
};

// way 3 to distructure its types inline
export const Button3 = (props: { className: string }) => {
  return <button className={props.className}>Hi {props.className}</button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error    \ it will ignore the ts error for compile time */}
      <Button2></Button2>

      <Button1 className="my-class"></Button1>
    </>
  );
};

export default Parent;
