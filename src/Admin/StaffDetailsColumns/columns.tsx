"use client"

import { ColumnDef } from "@tanstack/react-table"
import { useNavigate } from "react-router-dom";

// Define the shape of the PersonalInfo data
export type StaffDetailsColumns = {
  id: number;
  full_name: string;
  ssn: string;
  address: string;
  number_street: string;
  city: string;
  state: string;
  zip_code: string;
  referred_by: string;
  salary_desired: string;
  position_category: string;
  shift_desired: string;
  employed: string;
  contact_employer: string;
  user_id: number;
};


// Define the columns for the data table
export const columns: ColumnDef<StaffDetailsColumns>[] = [
  {
    accessorKey: "full_name",
    header: "Full Name",
  },
  {
    accessorKey: "ssn",
    header: "SSN",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "number_street",
    header: "Number & Street",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "zip_code",
    header: "Zip Code",
  },
  {
    accessorKey: "referred_by",
    header: "Referred By",
  },
  {
    accessorKey: "salary_desired",
    header: "Salary Desired",
  },
  {
    accessorKey: "position_category",
    header: "Position Category",
  },
  {
    accessorKey: "shift_desired",
    header: "Shift Desired",
  },
  {
    accessorKey: "employed",
    header: "Employed",
  },
  {
    accessorKey: "contact_employer",
    header: "Contact Employer",
  },
  {
    id: "details",
    header: "Actions",
    cell: ({ row }) => {
      const navigate = useNavigate(); // Use navigate hook inside the component
      const handleDetails = () => {
        navigate(`/details-forms/${row.original.user_id}`); // Navigate to the user's details form
      };

      return (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleDetails}
        >
          Open Details
        </button>
      );
    },
  },
];
