import React from "react";

interface ButtonProps {
  customStyle: string;
  children: React.ReactNode;
}

const Button = ({ children, customStyle, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={customStyle}>
      {children}
    </button>
  );
};

const Parent = () => {
  return <Button customStyle="bg-blue-400 text-white p-3">Click me</Button>;
};

export default Parent;
