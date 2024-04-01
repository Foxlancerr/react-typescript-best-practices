import React, { useRef, useEffect } from "react";

const NullRefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Initially, the inputRef is null
    console.log("Initial inputRef:", inputRef.current);
  }, []);

  const focusInput = () => {
    // Later, you might set the ref to point to an input field
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="bg-red-300 py-5 px-5 flex flex-col items-start">
      <h1 className="text-3xl mb-4">NullRefExample</h1>
      <input ref={inputRef} type="text" placeholder="Enter your name" className="px-3 py-2 bg-slate-100 text-blue-900"/>
      <button onClick={focusInput} className="bg-blue-700 py-2 px-4 rounded-full mt-4 text-white">Focus Input</button>
    </div>
  );
};

const StringRefExample: React.FC = () => {
  const legacyRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Initially, the string ref is null
    console.log("Initial string ref:", legacyRef.current);
  }, []);

  return (
    <div className="bg-yellow-600 p-5">
       <h1 className="text-3xl mb-4 text-white">StringRefExample</h1>
      <input ref={legacyRef} type="text" placeholder="Enter your email" />
    </div>
  );
};

const UndefinedRefExample: React.FC = () => {
  const undefinedRef = useRef<HTMLInputElement | undefined>();

  useEffect(() => {
    // Initially, the undefined ref is undefined
    console.log("Initial undefined ref:", undefinedRef.current);
  }, []);

  const setRef = () => {
    // Later, you might set the ref to point to an input field
    undefinedRef.current = document.querySelector("input")!;
    console.log("Updated undefined ref:", undefinedRef.current);
  };

  return (
    <div className="bg-zinc-900 text-white p-5"> 
       <h1 className="text-3xl mb-4">UndefinedRefExample</h1>
      <button onClick={setRef} className="bg-yellow-400 p-3 rounded-full px-4 py-2 text-black">Set Ref</button>
    </div>
  );
};

export default function Parent() {
  return (
    <>
    
      <UndefinedRefExample></UndefinedRefExample>
      <StringRefExample></StringRefExample>
      <NullRefExample></NullRefExample>
    </>
  );
}
