import React from "react";

const List = (props: {}) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <List></List>
      <List>Hello world!</List>
    </>
  );
};
