import { useEffect, useRef } from "react";

const Parent = () => {
  const id = useRef();

  useEffect(() => {
    id.current = "Random value!";
  }, []);

  return <div></div>;
};

export default Parent;
