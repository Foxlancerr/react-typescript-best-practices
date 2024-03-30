// Imagine NavBar is an external library!

const NavBar = (props: {
  title: string;
  links: string[];
  children: React.ReactNode;
}) => {
  return (
    <div>
      <h1 className="bg-red-600 mt-2 p-4 text-white font-bold mb-2.5">
        {props.title}
      </h1>
      {props.links.map((item, index) => {
        return (
          <a
            href={item}
            key={item + index}
            className={`underline hover:font-bold hover:text-blue-800 text-2xl ${
              index !== 0 && "ml-2"
            } `}
          >
            {item.substring(1)}
          </a>
        );
      })}

      <h1 className="font-semibold text-3xl text-center mt-5">
        {props.children}
      </h1>
    </div>
  );
};

import { ComponentProps } from "react";
import { Equal, Expect } from "../../helpers/type-utils";
// Your app:

type NavBarProps = ComponentProps<typeof NavBar>;

type test = Expect<
  Equal<
    NavBarProps,
    {
      title: string;
      links: string[];
      children: React.ReactNode;
    }
  >
>;

const Parent = () => {
  return (
    <NavBar title="Navbar" links={["/home", "/contact"]}>
      Children props
    </NavBar>
  );
};
export default Parent;
