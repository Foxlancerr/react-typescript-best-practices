import { useState } from "react";

interface ITags {
  id: number;
  value: string;
}
const Tags = () => {
  const [tags, setTags] = useState<ITags[]>([]);
  console.log(tags);
  return (
    <div>
      {tags.map((tag) => {
        return (
          <div
            key={tag.id}
            className={`${tag.id % 2 == 0 ? "bg-gray-100" : "bg-gray-200"}`}
          >
            {tag.value}
          </div>
        );
      })}
      <button
        onClick={() => {
          setTags((prev) => {
            return [
              ...prev,
              {
                id: Math.floor(Math.random() * 100),
                value: "New",
              },
            ];
          });
        }}
        className="bg-blue-700 py-2 px-3 rounded text-white font-bold mt-3"
      >
        Add Tag
      </button>
    </div>
  );
};

export default function Parent() {
  return <Tags></Tags>;
}
