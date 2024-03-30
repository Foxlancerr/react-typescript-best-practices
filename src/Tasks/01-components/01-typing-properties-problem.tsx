import React from "react";

export const Button = (props: unknown) => {
  return <button className={props.className}>Hi {props.className}</button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error    \ it will ignore the ts error for compile time */}
      <Button></Button>
  
      <Button className="my-class"></Button>
    </>
  );
};

export default Parent;
