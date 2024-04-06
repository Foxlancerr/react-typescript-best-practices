import { ChangeEventHandler } from "react";

/**
 * In this exercise, we want to create a component that can either have
 * `value` and `onChange` props, or neither of those props.
 *
 * We ALSO want to have label as a required prop.
 *
 * 1. Figure out why the errors are occurring on the `Test` component.
 *
 * 2. Find a way to fix the errors.
 */
type InputProps = {
  value?: string;
  onChange?: ChangeEventHandler;
} & {
  label: string;
};

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <input {...props} />
      </label>
    </div>
  );
};

const Parent = () => {
  return (
    <div>
      <Input label="Greeting" value="Hello" onChange={() => {}} />
      <Input label="Greeting" />

      <Input label="Greeting" value="Hello" />

      <Input label="Greeting" onChange={() => {}} />
    </div>
  );
};

export default Parent;
