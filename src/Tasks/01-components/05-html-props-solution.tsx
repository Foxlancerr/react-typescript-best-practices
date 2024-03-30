import React, { ComponentProps, HtmlHTMLAttributes } from "react";

// way1 to solve this probles
const Button1 = ({ className, ...rest }: ComponentProps<"button">) => {
  return (
    <button {...rest} className={`default-classname ${className}`}>
      click me
    </button>
  );
};
// way2 to solve this probles
const Button2 = ({
  className,
  ...rest
}: HtmlHTMLAttributes<HTMLButtonElement>) => {
  console.log(rest);
  return (
    <button {...rest} className={className}>
      {" "}
      click me
    </button>
  );
};

const Parent = () => {
  return (
    <>
      <Button1
        className={"bg-red-400"}
        onClick={() => {
          console.log("click me btn1");
        }}
        type="button"
      ></Button1>
      <Button2
        className={"bg-brown-400"}
        onClick={() => {
          console.log("click me btn2");
        }}
        type="button"
      ></Button2>
    </>
  );
};

export default Parent;
