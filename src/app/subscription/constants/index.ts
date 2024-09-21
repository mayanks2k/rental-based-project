import { FaCar } from "react-icons/fa";

interface LoanDetail {
  name: string;
  subscription: number;
  loan: number;
  info?: string;
}
interface Loan {
  id: number;
  name: string;
  subscription: number;
  loan: number;
  details?: LoanDetail[];
}
export const loansTableData: Loan[] = [
  {
    id: 1,
    name: "On Road Cost",
    subscription: 1022955,
    loan: 1022955,
    details: [
      {
        name: "New Car Price (Including GST)",
        subscription: 1022955,
        loan: 1022955,
      },
      {
        name: "Miscellaneous charges and taxes",
        subscription: 1022955,
        loan: 1022955,
        info: "this is a info",
      },
    ],
  },
  {
    id: 2,
    name: "Loan Amount",
    subscription: 1122005,
    loan: 987876,
  },
  {
    id: 3,
    name: "Upfront Down Payment",
    subscription: 1122005,
    loan: 987876,
  },
  {
    id: 4,
    name: "Total Monthly Outflow",
    subscription: 1397955,
    loan: 1478955,
    details: [
      { name: "Loan EMI", subscription: 1000955, loan: 1022908 },
      {
        name: "Opportunity Cost",
        subscription: 10429452,
        loan: 1021905,
        info: "this is a info",
      },
      { name: "Future Insurance", subscription: 10429452, loan: 1021905 },
      {
        name: "Service and Maintenance",
        subscription: 10429452,
        loan: 1021905,
      },
      { name: "Road Side Assistance", subscription: 10429452, loan: 1021905 },
      { name: "Pickup & Drop Charges", subscription: 10429452, loan: 1021905 },
      {
        name: "Miscellaneous Charges",
        subscription: 10429452,
        loan: 1021905,
        info: "this is a info",
      },
    ],
  },
  {
    id: 5,
    name: "Net OutFlow Over Tenure",
    subscription: 1122005,
    loan: 987876,
  },
];


