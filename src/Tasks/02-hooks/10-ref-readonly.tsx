import { useEffect, useRef } from "react";

const Parent = () => {
  // problem
  const ref1 = useRef<string>(null);

  useEffect(() => {
    // Why is this not allowed?
    // ref1.current = "Hello";
  }, []);

  // solution > if you pass string as generics then necceary to set string value as well never keep null
  const ref2 = useRef<string>("Hi");

  const refValueChanged = () => {
    console.log("called")
    // Why is this not allowed?
    ref2.current = "<p>pakistan</p>";
  };

  console.log(ref2)
  useEffect(()=>{

  }, []);

  return (
    <div className="w-full">
      <h1 ref={ref2} className="bg-green-600 py-2 text-white">
        {ref2.current}
      </h1>
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded-full mx-auto"
        onClick={refValueChanged}
      >
        change
      </button>
    </div>
  );
};

export default Parent;
