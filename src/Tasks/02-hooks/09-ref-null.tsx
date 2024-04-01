import { useEffect, useRef } from "react";

const Parent = () => {
  // problem
  const ref1 = useRef<HTMLDivElement>();

  // solution
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(ref1.current);
    console.log(ref2.current);
  }, []);

  return (
    <>
      <h1 ref={ref1} className="bg-red-600 py-2 text-white">
        wrong ref
      </h1>
      <h1 ref={ref2} className="bg-green-600 py-2 text-white">
        correct ref
      </h1>
    </>
  );
};

export default Parent;
