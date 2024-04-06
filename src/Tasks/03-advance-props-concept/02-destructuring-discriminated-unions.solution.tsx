/**
 * We've got the same problem as the previous exercise, but this time we're
 * destructuring our props.
 *
 * 1. Figure out why the error on 'title' is happening.
 *
 * 2. Find a way to fix the error.
 */

type ModalProps =
  | {
      variant: "no-title";
    }
  | {
      variant: "title";
      title: string;
    };

/**
 * The best solution is to destructure AFTER the variant has been narrowed.
 *
 * This gives TypeScript the chance to apply the narrowing to the 'props' object,
 * which it understands that 'variant' is a property of.
 */
export const Modal = (props: ModalProps) => {
  if (props.variant === "no-title") {
    return <div>No title</div>;
  } else {
    const { title } = props;
    return <div>Title: {title}</div>;
  }
};

const Parent = () => {
  return (
    <div>
      <Modal variant="title" title="Hello" />
      <Modal variant="no-title" />

      {/* @ts-expect-error */}
      <Modal />
      <Modal
        variant="no-title"
        // @ts-expect-error
        title="Oh dear"
      />
    </div>
  );
};

export default Parent;
