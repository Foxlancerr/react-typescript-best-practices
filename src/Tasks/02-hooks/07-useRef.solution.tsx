import { useEffect, useRef } from "react";

const Parent = () => {
  const id = useRef<string>();

  useEffect(() => {
    id.current = "Random value!";
    console.log(id);
  }, []);

  return <div>{id.current}</div>;
};

export default Parent;
