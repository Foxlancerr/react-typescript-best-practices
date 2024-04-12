import { ReactNode } from "react";
import { Equal, Expect } from "../../helpers/type-utils";

interface TableProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

export const Table = <T,>(props: TableProps<T>) => {
  return (
    <table>
      <tbody>
        {props.rows.map((row) => (
          <tr>{props.renderRow(row)}</tr>
        ))}
      </tbody>
    </table>
  );
};

interface User {
  id: number;
  name: string;
  age: number;
}



export default function Parent() {
  return (
    <>
   
      <Table<User>
        // @ts-expect-error rows should be User[]
        rows={[1, 2, 3]}
        renderRow={(row) => {
          return <td>{row.name}</td>;
        }}
      />
    </>
  );
}
