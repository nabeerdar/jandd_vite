"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the shape of the patient application data
export type PatientApplications = {
  id: number
  first_name: string
  last_name: string
  email: string
  phone: string
  take_over: string
  gender: string
  age: string
  pdn: string
  pcs: string
  living_situation: string
  care_plan: string
  experience: string
  paid_status: string
  availability: string
  created_at: string
}

// Define the columns for the data table
export const columns: ColumnDef<PatientApplications>[] = [
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
    accessorKey: "take_over",
    header: "Take Over",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "pdn",
    header: "PDN",
  },
  {
    accessorKey: "pcs",
    header: "PCS",
  },
  {
    accessorKey: "living_situation",
    header: "Living Situation",
  },
  {
    accessorKey: "care_plan",
    header: "Care Plan",
  },
  {
    accessorKey: "experience",
    header: "Experience",
  },
  {
    accessorKey: "paid_status",
    header: "Paid Status",
  },
  {
    accessorKey: "availability",
    header: "Availability",
  },
  // {
  //   accessorKey: "created_at",
  //   header: "Created At",
  // },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Registration Date
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
          const response = await fetch(`https://janddbackend.xyz/get_user_id_by_email/${row.original.email}`);
          
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
          const deleteResponse = await fetch(`https://janddbackend.xyz/delete_patients/${user_id}`, {
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
  
  
  
  
]
