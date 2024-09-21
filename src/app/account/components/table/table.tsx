import classNames from 'classnames';
import React from 'react';

type TableCellType = 'text' | 'number' | 'button' | 'dropdown' | 'container';

export interface TableColumn {
  key: string;
  header: string;
  type: TableCellType;
  styles?: string;
  conditionalStyles?: { [key: string]: string };
}

export interface TableRow {
  [key: string]: any;
}

interface TableProps {
  columns: TableColumn[];
  data: TableRow[];
}

const getConditionalStyle = (value: any, conditionalStyles?: { [key: string]: string }) => {
  if (conditionalStyles && conditionalStyles[value]) {
    return conditionalStyles[value];
  }
  return '';
};

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative ">
            {columns.map((column) => (
              <th
                key={column.key}
                className="bg-gray-200 text-gray-700 text-sm font-bold border border-gray-300 text-left block md:table-cell  p-2 "
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="block md:table-row-group ">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="text-sm border border-gray-300 m-4 md:mb-0 block md:table-row my-4"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="p-2 border-t border-gray-300 block md:table-cell"
                >
                  <span className="inline-block w-1/3 md:hidden text-sm font-bold">
                    {column.header}
                  </span>
                  {column.type === 'text' && <span className={`${column.styles}`}>{row[column.key]}</span>}
                  {column.type === 'number' && <span className={`${column.styles}`}>{row[column.key]}</span>}
                  {column.type === 'button' && (
                    <button className={classNames(`${column.styles}`, "bg-blue-500 text-white py-1 px-2 rounded")}>
                      {row[column.key]}
                    </button>
                  )}
                  {column.type === 'dropdown' && (
                    <select className={classNames(`${column.styles}`, "py-1 px-2 border rounded")}>
                      {row[column.key].map((option: string, index: number) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  {column.type === 'container' && (
                    <div
                      className={getConditionalStyle(row[column.key], column.conditionalStyles)}
                    >
                      {row[column.key]}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
