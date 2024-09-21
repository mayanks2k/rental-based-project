import { TableColumn , TableRow } from "../../components/table";

export const myOrdersData: TableRow[] = [
  {
    orderID: '#01236',
    carName: "Maruti Celerio",
    pickUpLocation: 'Raipur',
    dropOffLocation: 'Bhilai',
    pickUpDate: 'May 8, 2024',
    returnDate: 'May 8, 2024',
    status: 'scheduled',
  },
  {
    orderID: '#01263',
    carName: 'Mahindra Thar',
    pickUpLocation: 'Bangalore',
    dropOffLocation: 'Mysore',
    pickUpDate: 'May 6, 2024',
    returnDate: 'May 6, 2024',
    status: 'scheduled',
  },
  {
    orderID: '#01245',
    carName: 'Maruti Vitara Brezza',
    pickUpLocation: 'Hyderabad',
    dropOffLocation: 'Vizag',
    pickUpDate: 'May 13, 2024',
    returnDate: 'May 13, 2024',
    status: 'scheduled',
  },
];

export const completedOrdersData: TableRow[] = [
    {
      orderID: '#01276',
      carName: "Tata Nexon EV",
      pickUpLocation: 'Raipur',
      dropOffLocation: 'Bhilai',
      pickUpDate: 'May 8, 2024',
      returnDate: 'May 8, 2024',
      status: 'completed',
    },
    {
      orderID: '#01236',
      carName: 'Tata Harrier',
      pickUpLocation: 'Bangalore',
      dropOffLocation: 'Mysore',
      pickUpDate: 'May 6, 2024',
      returnDate: 'May 6, 2024',
      status: 'completed',
    },
    {
      orderID: '#01254',
      carName: 'Tata Tiago',
      pickUpLocation: 'Hyderabad',
      dropOffLocation: 'Vizag',
      pickUpDate: 'May 13, 2024',
      returnDate: 'May 13, 2024',
      status: 'completed',
    },
    {
        orderID: '#01290',
        carName: 'Honda City',
        pickUpLocation: 'Bangalore',
        dropOffLocation: 'Mysore',
        pickUpDate: 'May 6, 2024',
        returnDate: 'May 6, 2024',
        status: 'completed',
      },
      {
        orderID: '#01209',
        carName: 'Tata Punch',
        pickUpLocation: 'Hyderabad',
        dropOffLocation: 'Vizag',
        pickUpDate: 'May 13, 2024',
        returnDate: 'May 13, 2024',
        status: 'completed',
      },
  ];
