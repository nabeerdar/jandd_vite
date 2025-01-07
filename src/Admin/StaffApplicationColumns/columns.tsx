"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the shape of the staff application data
export type StaffApplications = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  communication: string;
  experience: string;
  position: string;
  start_date: string | null;
  additional_info: string;
  is_over_18: boolean;
  is_eligible_to_work: boolean;
  ref1_name: string;
  ref1_phone_number: string;
  ref2_name: string;
  ref2_phone_number: string;
  resume_path: string | null;
  created_at: string;
};

// Define the columns for the data table
export const columns: ColumnDef<StaffApplications>[] = [
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "communication",
    header: "Preferred Communication",
  },
  {
    accessorKey: "experience",
    header: "Experience",
  },
  {
    accessorKey: "position",
    header: "Position Applied",
  },
  {
    accessorKey: "start_date",
    header: "Start Date",
    cell: ({ getValue }) => {
      const value = getValue<string | null>();
      return value ? new Date(value).toLocaleDateString() : "N/A";
    },
  },
  {
    accessorKey: "additional_info",
    header: "Additional Info",
  },
  {
    accessorKey: "is_over_18",
    header: "Over 18",
    cell: ({ getValue }) => (getValue<boolean>() ? "Yes" : "No"),
  },
  {
    accessorKey: "is_eligible_to_work",
    header: "Eligible to Work",
    cell: ({ getValue }) => (getValue<boolean>() ? "Yes" : "No"),
  },
  {
    accessorKey: "ref1_name",
    header: "Reference 1 Name",
  },
  {
    accessorKey: "ref1_phone_number",
    header: "Reference 1 Phone",
  },
  {
    accessorKey: "ref2_name",
    header: "Reference 2 Name",
  },
  {
    accessorKey: "ref2_phone_number",
    header: "Reference 2 Phone",
  },
  {
    accessorKey: "resume_path",
    header: "Resume",
    cell: ({ getValue }) => {
      const value = getValue<string | null>();
      return value ? (
        <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Download
        </a>
      ) : (
        "N/A"
      );
    },
  },
  
  // {
  //   accessorKey: "created_at",
  //   header: "Submitted At",
  //   cell: ({ getValue }) => new Date(getValue<string>()).toLocaleString(),
  // },
  {
    accessorKey: "Submitted At",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Submitted Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "details",
    header: "Actions",
    cell: ({ row }) => {
      const handleDelete = async () => {
        try {
          // Retrieve the user ID by their email
          const response = await fetch(`https://janddbackend.xyz/get_staff_id_by_email/${row.original.email}`);
          
          if (!response.ok) {
            const errorData = await response.json();
            alert(`Error: ${errorData.message || "Unable to retrieve user ID."}`);
            return;
          }
  
          const { user_id } = await response.json();
  
          if (!user_id) {
            alert("User not found.");
            return;
          }
  
          // Confirm the delete action
          const confirmDelete = window.confirm("Are you sure you want to delete this user?");
          if (!confirmDelete) return;
  
          // Send the user ID to the backend to delete the user
          const deleteResponse = await fetch(`https://janddbackend.xyz/delete_staff/${user_id}`, {
            method: "DELETE",
          });
  
          if (deleteResponse.ok) {
            alert("User deleted successfully!");
            // Optionally, refresh the data or remove the deleted user from the UI
          } else {
            const errorData = await deleteResponse.json();
            alert(`Error: ${errorData.message || "Unable to delete user."}`);
          }
        } catch (error) {
          alert(`Error || "An error occurred."}`);
        }
      };
  
      return (
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      );
    },
  },
  
];
