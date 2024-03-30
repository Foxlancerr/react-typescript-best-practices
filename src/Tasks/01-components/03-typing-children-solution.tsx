import React from "react";

interface IProps {
  children: React.ReactNode;
}
const List: React.FC<IProps> = (props) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <List></List>
      <List>List1</List>
    </>
  );
};

export default Parent;
