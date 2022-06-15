import React from "react";

import { useTable } from "react-table";

function BasicTableComponent() {
  const columns = [
    {
      Header: "Name",
      columns: [
        {
          Header: "First Name",
          accessor: "firstName",
        },
        {
          Header: "First Name",
          accessor: "firstName",
        },
      ],
    },
    {
      Header: "Info",
      columns: [
        {
          Header: "Age",
          accessor: "age",
        },
        {
          Header: "Visits",
          accessor: "visits",
        },
        {
          Header: "Status",
          accessor: "status",
        },
        {
          Header: "Profile Progress",
          accessor: "progress",
        },
      ],
    },
  ];

  const data = [
    {
      firstName: "horn-od926",
      lastName: "selection-gsykp",
      age: 22,
      visits: 20,
      progress: 39,
      status: "single",
    },
    {
      firstName: "heart-nff6w",
      lastName: "information-nyp92",
      age: 16,
      visits: 98,
      progress: 40,
      status: "complicated",
    },
    {
      firstName: "minute-yri12",
      lastName: "fairies-iutct",
      age: 7,
      visits: 77,
      progress: 39,
      status: "single",
    },
    {
      firstName: "degree-jx4h0",
      lastName: "man-u2y40",
      age: 27,
      visits: 54,
      progress: 92,
      status: "relationship",
    },
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table className="table" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default BasicTableComponent;
