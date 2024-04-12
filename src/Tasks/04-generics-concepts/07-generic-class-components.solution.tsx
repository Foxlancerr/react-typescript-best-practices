import React, { ReactNode } from "react";
import { Equal, Expect } from "../../helpers/type-utils";

interface TableProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

export class Table<T> extends React.Component<TableProps<T>> {
  render(): ReactNode {
    return (
      <table>
        <tbody>
          {this.props.rows.map((row) => (
            <tr key={row.id}>{this.props.renderRow(row)}</tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const data = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Mujtaba",
  },
  {
    id: 3,
    name: "haneef",
  },
  {
    id: 4,
    name: "Sudais",
  },
];

const Parent = () => {
  return (
    <div>
      <Table rows={data} renderRow={(row) => <td>{row.name}</td>} />
    </div>
  );
};

export default Parent;
