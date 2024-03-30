import { useState } from "react";

interface TagState {
  tagSelected: number | null;
  tags: { id: number; value: string }[];
}

const Tags = () => {
  const [state, setState] = useState<TagState>({
    tags: [],
    tagSelected: null,
  });
  return (
    <div className="flex flex-col">
      {state.tags.map((tag) => {
        return (
          <button
            key={tag.id}
            onClick={() => {
              setState(
                // here is the changes done. we can specify currentState to TagState
                (currentState): TagState => ({
                  ...currentState,
                  tags: [
                    ...currentState.tags,
                    {
                      id: new Date().getTime(),
                      value: "New",
                      // @ts-expect-error
                      otherValue: "something",
                    },
                  ],
                })
              );
            }}
          >
            {tag.value}
          </button>
        );
      })}

      <button
        onClick={() => {
          setState(
            // here is the changes done. we can specify currentState to TagState
            (currentState): TagState => ({
              ...currentState,
              tags: [
                ...currentState.tags,
                {
                  id: new Date().getTime(),
                  value: "New",
                  // @ts-expect-error
                  otherValue: "something",
                },
              ],
            })
          );
        }}

        className="px-3 py-2 font-bold rounded bg-red-950 text-white w-[100px] self-center mt-3"
      >
        Add Tag
      </button>
    </div>
  );
};

export default function Parent() {
  return <Tags></Tags>;
}
