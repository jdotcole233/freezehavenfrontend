import Test from "../test";
import { Sales } from "../components/Sales";
import { Products } from "../components/Products";
import { Customers } from "../components/Customers";
import { Employees } from "../components/Employees";
import { Transactions } from "../components/Transactions";
import { Expenses } from "../components/Expenses";
import Dashboard from "../components/Dashboard/Dashboard";

const navigationItems = [
  {
    title: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
        />
      </svg>
    ),

    path: "/",
    component: <Dashboard />,
  },
  {
    title: "Sales",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
    path: "/sales",
    component: <Sales />,
  },
  {
    title: "Transactions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
    path: "/transactions",
    component: <Transactions />,
  },
  {
    title: "Products",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    path: "/products",
    component: <Products />,
  },
  {
    title: "Customers",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
        />
      </svg>
    ),
    path: "/customers",
    component: <Customers />,
  },
  {
    title: "Expenses",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    path: "/expenses",
    component: <Expenses />,
  },
  {
    title: "Employees",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    path: "/employees",
    component: <Employees />,
  },
];

const mockProducts = [
  {
    id: 1,
    product_name: "Red Fish",
    product_type: "Fish",
    product_category: "Frozen Food",
    created_by: "John Bellushi",
    status: "In-stock",
  },
  {
    id: 2,
    product_name: "Chicken Wings",
    product_type: "Poultry",
    product_category: "Frozen Food",
    created_by: "John Bellushi",
    status: "In-stock",
  },
  {
    id: 3,
    product_name: "Broccoli",
    product_type: "Vegetable",
    product_category: "Fresh Produce",
    created_by: "John Bellushi",
    status: "In-stock",
  },
  {
    id: 4,
    product_name: "Vanilla Ice Cream",
    product_type: "Dairy",
    product_category: "Frozen Dessert",
    created_by: "John Bellushi",
    status: "In-stock",
  },
  {
    id: 5,
    product_name: "Ground Beef",
    product_type: "Meat",
    product_category: "Fresh Food",
    created_by: "John Bellushi",
    status: "In-stock",
  },
  {
    id: 6,
    product_name: "Orange Juice",
    product_type: "Beverage",
    product_category: "Beverages",
    created_by: "John Bellushi",
    status: "In-stock",
  },
  {
    id: 7,
    product_name: "Cheddar Cheese",
    product_type: "Dairy",
    product_category: "Cheese",
    created_by: "John Bellushi",
    status: "In-stock",
  },
  {
    id: 8,
    product_name: "Sliced Bread",
    product_type: "Bakery",
    product_category: "Bread",
    created_by: "John Bellushi",
    status: "In-stock",
  },
  {
    id: 9,
    product_name: "Tomato Sauce",
    product_type: "Condiment",
    product_category: "Canned Goods",
    created_by: "John Bellushi",
    status: "In-stock",
  },
  {
    id: 10,
    product_name: "Mixed Nuts",
    product_type: "Snack",
    product_category: "Nuts",
    created_by: "John Bellushi",
    status: "In-stock",
  },
];

const mockCustomers = [
  {
    id: 1,
    customer_name: "Francis Baidoo",
    location: "Accra",
    phone_number: "0502393992",
  },
  {
    id: 2,
    customer_name: "Alice Johnson",
    location: "New York",
    phone_number: "555-1234",
  },
  {
    id: 3,
    customer_name: "Carlos Rodriguez",
    location: "Mexico City",
    phone_number: "+52 55 5555 5555",
  },
  {
    id: 4,
    customer_name: "Sara Kim",
    location: "Seoul",
    phone_number: "+82 10 1234 5678",
  },
  {
    id: 5,
    customer_name: "Mohammed Al-Farsi",
    location: "Dubai",
    phone_number: "+971 50 123 4567",
  },
  {
    id: 6,
    customer_name: "Elena Rossi",
    location: "Rome",
    phone_number: "+39 333 4567890",
  },
];

const mockEmployees = [
  {
    id: 1,
    employee_name: "Ebenezer Darkwa",
    phone_number: "023244244",
    date_of_employment: "2022-04-13",
    date_of_termination: "2024-04-26",
    location: "Accra",
    dob: "1997-03-09",
    gender: "MALE",
  },
  {
    id: 2,
    employee_name: "Anna Smith",
    phone_number: "555-9876",
    date_of_employment: "2021-08-20",
    date_of_termination: null,
    location: "New York",
    dob: "1985-12-15",
    gender: "FEMALE",
  },
  {
    id: 3,
    employee_name: "Raj Patel",
    phone_number: "+91 98765 43210",
    date_of_employment: "2023-01-05",
    date_of_termination: null,
    location: "Mumbai",
    dob: "1990-06-22",
    gender: "MALE",
  },
  {
    id: 4,
    employee_name: "Maria Gonzalez",
    phone_number: "+34 666 789123",
    date_of_employment: "2020-11-10",
    date_of_termination: "2023-12-15",
    location: "Madrid",
    dob: "1988-04-30",
    gender: "FEMALE",
  },
  {
    id: 5,
    employee_name: "Hiroshi Tanaka",
    phone_number: "+81 90 1234 5678",
    date_of_employment: "2022-02-28",
    date_of_termination: null,
    location: "Tokyo",
    dob: "1980-09-05",
    gender: "MALE",
  },
];

const mockProductDetails = [
  {
    weight: 10,
    quantity: 2,
    cost_price: 240,
    unit_price: 36,
    total_income: 360,
    profit: 120,
    created_by: "John Bellushi",
  },
  {
    weight: 5,
    quantity: 1,
    cost_price: 120,
    unit_price: 25,
    total_income: 25,
    profit: -95,
    created_by: "Alice Johnson",
  },
  {
    weight: 2,
    quantity: 3,
    cost_price: 50,
    unit_price: 15,
    total_income: 45,
    profit: -5,
    created_by: "Carlos Rodriguez",
  },
  {
    weight: 1,
    quantity: 4,
    cost_price: 80,
    unit_price: 20,
    total_income: 80,
    profit: 0,
    created_by: "Sara Kim",
  },
  {
    weight: 3,
    quantity: 2,
    cost_price: 100,
    unit_price: 30,
    total_income: 60,
    profit: -40,
    created_by: "Mohammed Al-Farsi",
  },
];

const mockTransactions = [
  {
    id: 1,
    customer_name: "John Bellions",
    product_name: "Red Fish",
    weight: 3,
    unit_price: 36,
    total_price: 108,
    payment_type: "CASH",
    amount_paid: 200,
    customer_balance: 82,
    created_by: "Hiroshi Tanaka",
    date_of_purchase: "2023-12-12",
  },
  {
    id: 2,
    customer_name: "Alice Johnson",
    product_name: "Chicken Wings",
    weight: 2,
    unit_price: 25,
    total_price: 50,
    payment_type: "CARD",
    amount_paid: 50,
    customer_balance: 0,
    created_by: "Anna Smith",
    date_of_purchase: "2023-12-15",
  },
  {
    id: 3,
    customer_name: "Carlos Rodriguez",
    product_name: "Broccoli",
    weight: 1.5,
    unit_price: 20,
    total_price: 30,
    payment_type: "CASH",
    amount_paid: 30,
    customer_balance: 0,
    created_by: "Raj Patel",
    date_of_purchase: "2023-12-18",
  },
  // ... (remaining records with incremental ids)
];

const mockEmployeeDetails = [
  {
    salary: 400, 
    date_paid: "2023-01-01"
  },
  {
    salary: 400, 
    date_paid: "2023-01-01"
  },
  {
    salary: 400, 
    date_paid: "2023-01-01"
  },
  {
    salary: 400, 
    date_paid: "2023-01-01"
  },
]

const mockExpenses = [
  {
    expense_category: "Snacks",
    reference: "EXP01",
    date: "2023-12-2",
    amount: 200,
    description: "Feeding",
  },
  {
    expense_category: "Office Supplies",
    reference: "EXP02",
    date: "2023-12-5",
    amount: 150,
    description: "Purchase of stationery",
  },
  {
    expense_category: "Utilities",
    reference: "EXP03",
    date: "2023-12-8",
    amount: 300,
    description: "Electricity bill",
  },
  {
    expense_category: "Transportation",
    reference: "EXP04",
    date: "2023-12-12",
    amount: 120,
    description: "Fuel for delivery vehicles",
  },
  {
    expense_category: "Maintenance",
    reference: "EXP05",
    date: "2023-12-15",
    amount: 180,
    description: "Repair and maintenance",
  },
  {
    expense_category: "Marketing",
    reference: "EXP06",
    date: "2023-12-18",
    amount: 250,
    description: "Advertising campaign",
 
  },
];



export {
  navigationItems,
  mockProducts,
  mockCustomers,
  mockEmployees,
  mockTransactions,
  mockProductDetails,
  mockEmployeeDetails,
  mockExpenses
};
