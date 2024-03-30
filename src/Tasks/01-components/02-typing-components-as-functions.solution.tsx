import React from "react";

interface Props {
  className: string;
}

/* @ts-expect-error */
export const Button: React.FC<Props> = (props) => {
  console.log(props);
  return <h1>hello world</h1>;
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};

export default Parent;
