/**
 * Let's say we're working with an external library that adds a new
 * global element to the DOM. We want to strongly type this element
 * so that it can only be used with the correct attributes.
 *
 * In this case, we're adding a <something /> element to the DOM,
 * which takes a required `id` attribute.
 *
 * Hint - you'll need to declaration merge with an existing
 * interface in the JSX namespace.
 */

// custom Intrensic elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      something: {
        id: string | number | boolean;
      };
    }
  }
}
<>
  <something id="123"></something>
  <something id={true}></something>
  <something id={123}></something>
</>;
