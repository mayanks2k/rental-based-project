"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { loansTableData } from "../constants"; // Make sure to import your data correctly
import { IoInformationCircleOutline } from "react-icons/io5";

const SubscriptionLoanTable: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  return (
    <table className="w-full bg-white border rounded shadow-sm">
      <thead>
        <tr className="bg-green-500">
          <th className="py-3 px-4 border-b text-left w-5/12"></th>
          <th className="text-white font-medium py-3 px-4 border-b text-left w-3/12">
            Subscrption
          </th>
          <th className="text-white font-medium py-3 px-4 border-b text-left w-3/12">
            Loan
          </th>
          <th className="py-3 px-4 border-b text-right w-1/12"></th>
        </tr>
      </thead>
      <tbody>
        {loansTableData.map((loan) => (
          <React.Fragment key={loan.id}>
            <tr
              onClick={() => toggleRow(loan.id)}
              className="hover:bg-gray-100 transition-colors"
            >
              <td className="text-sm py-3 px-4 border-b  w-5/12">
                {loan.name}
              </td>
              <td className="text-sm py-3 px-4 border-b  w-3/12">
                ₹ ${loan.subscription}
              </td>
              <td className="text-sm py-3 px-4 border-b  w-3/12">
                ₹ {loan.loan}
              </td>
              <td className="text-sm py-3 px-4 border-b text-right  w-1/12">
                {loan?.details && (
                  <div>
                    {expandedRow === loan.id ? (
                      <IoIosArrowUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <IoIosArrowDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                )}
              </td>
            </tr>
            {expandedRow === loan.id && loan?.details && (
              <tr className="bg-gray-50">
                <td colSpan={4} className="border-b">
                  <div className="overflow-x-auto">
                    <table className="w-full bg-gray-100 rounded-lg">
                      <tbody>
                        {loan?.details?.map((detail, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-200 transition-colors"
                          >
                            <td className="text-sm text-slate-500 py-2 px-4 border-b  w-5/12">
                              <span className="pb-5">{detail.name}{" "}</span>
                              {detail?.info && (
                                <button>
                                  <IoInformationCircleOutline size={18} />
                                </button>
                              )}
                            </td>
                            <td className="text-sm text-slate-500 py-2 px-4 border-b  w-3/12">
                              ₹ ${detail.subscription}
                            </td>
                            <td className="text-sm text-slate-500 py-2 px-4 border-b  w-3/12">
                              ₹ {detail.loan}
                            </td>
                            <td className="text-sm text-slate-500 py-2 px-4 border-b  w-1/12"></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default SubscriptionLoanTable;
