"use client"

import { ColumnDef } from "@tanstack/react-table"

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
  {
    accessorKey: "created_at",
    header: "Created At",
  },
]
