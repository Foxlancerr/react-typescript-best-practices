type ModalProps = (
  | {
      variant: "no-title";
    }
  | {
      variant: "title";
      title: string;
    }
) & {
  buttonColor: string;
};

/**
 * 1. How do we add a `buttonColor` prop to the `ModalProps` type that is
 * _always_ required across different variants?
 */
export const Modal = (props: ModalProps) => {
  if (props.variant === "no-title") {
    return (
      <div>
        <span>No title</span>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}
        >
          Click me!
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <span>Title: {props.title}</span>
        <button
          style={{
            backgroundColor: props.buttonColor,
          }}
        >
          Click me!
        </button>
      </div>
    );
  }
};

const Parent = () => {
  return (
    <div>
      <Modal buttonColor="red" variant="no-title" />
      <Modal buttonColor="yellow" variant="no-title" />
      <Modal variant="title" title="Hello" buttonColor="blue" />
    </div>
  );
};

export default Parent;
