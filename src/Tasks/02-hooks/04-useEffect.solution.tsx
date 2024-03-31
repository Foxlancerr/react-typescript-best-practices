import { useEffect, useState} from "react";

const useTimeout = (timerMs: number) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("done");
    }, timerMs);
    return () => {
      clearTimeout(timeout);
    };
  }, [timerMs]);
};

const CounterApp = () => {
  const [count, setCount] = useState(0);

  // Effect to log count value every time it changes
  useEffect(() => {
    console.log("Count value changed:", count);

    // Cleanup function to clear console log when component unmounts
    return () => {
      console.log("Component unmounted, clearing console log.");
    };
  }, [count]); // Dependency array ensures this effect runs only when count changes

  // Function to increment count
  const increment = () => {
    setCount(count + 1);
  };

  useTimeout(3000);
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button
        onClick={increment}
        className="px-2 py-2 bg-blue-700  text-white font-bold"
      >
        Increment
      </button>
    </div>
  );
};

export default function Parent() {
  useTimeout(3000);
  return <CounterApp></CounterApp>;
}
