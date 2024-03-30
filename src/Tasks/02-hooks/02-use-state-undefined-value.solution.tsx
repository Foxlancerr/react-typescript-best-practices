import { useEffect, useState } from "react";
import { Equal, Expect } from "../../helpers/type-utils";

interface IStudent {
  id: number;
  name: string;
}

const fetchData = () => {
  return Promise.resolve({
    id: 1,
    name: "zafar",
  });
};

const Parent = () => {
  const [record, setRecord] = useState<IStudent[] | undefined>(undefined);

  useEffect(() => {
    fetchData().then((val) => {
      setRecord([val]);
    });
    console.log("run");
  }, []);

  return (
    record &&
    record.map((item) => (
      <div key={item.id}>
        <h1>Id: {item.id}</h1>
        <p>name: {item.name}</p>
      </div>
    ))
  );

  type test = [Expect<Equal<typeof record, IStudent[] | undefined>>];
};

export default Parent;
