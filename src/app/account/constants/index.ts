import { TableColumn, TableRow } from "../components/table";

export const columns: TableColumn[] = [
  { key: 'orderID', header: 'Order ID', type: 'text', styles: "text-sm" },
  { key: 'carName', header: 'Car Name', type: 'text', styles: "font-bold" },
  { key: 'pickUpLocation', header: 'Pick Up Location', type: 'text' },
  // { key: 'dropOffLocation', header: 'Drop Off Location', type: 'text' },
  { key: 'pickUpDate', header: 'Pick Up Date', type: 'text' },
  { key: 'returnDate', header: 'Return Date', type: 'text' },  
  {
    key: 'status',
    header: 'Status',
    type: 'container',
    conditionalStyles: {
      completed: 'bg-green-500 text-white rounded-xl text-center px-2',
      scheduled: 'bg-orange-500 text-white rounded-xl text-center px-2',
      cancelled: 'bg-red-500 text-white rounded-xl text-center px-2',
    },
  },
];

export const data: TableRow[] = [
  {
    orderID: '#01236',
    carName: "Maruti Ertiga",
    pickUpLocation: 'Raipur',
    dropOffLocation: 'Bhilai',
    pickUpDate: 'May 8, 2024',
    returnDate: 'May 8, 2024',
    status: 'completed',
  },
  {
    orderID: '#01263',
    carName: 'Tata Nexon',
    pickUpLocation: 'Bangalore',
    dropOffLocation: 'Mysore',
    pickUpDate: 'May 6, 2024',
    returnDate: 'May 6, 2024',
    status: 'scheduled',
  },
  {
    orderID: '#01245',
    carName: 'Maruti Brezza',
    pickUpLocation: 'Hyderabad',
    dropOffLocation: 'Vizag',
    pickUpDate: 'May 13, 2024',
    returnDate: 'May 13, 2024',
    status: 'cancelled',
  },
];

export const jeepData = {
    title: 'Mahindra XUV 400',
    subtitle: '₹34,995',
    imageUrl: '/assets/images/cars/final/XUV_400.png', // Replace with your image URL
    stats: [
      { key: 'Seats', value: '5' },
      { key: 'Luggage', value: '2' },
      { key: 'Doors', value: '4' },
      { key: 'Drive', value: '4x4' },
      { key: 'Engine', value: '3000' },
      { key: 'Fuel', value: 'Electric' },
      { key: 'Type', value: 'SUV' },
    ],
    actions: [
      { label: 'Subscribe Now', href: '#' },
    ],
  };

  export const productData = [
    jeepData,
    jeepData,
    jeepData
  ]