import { ColumnDef } from "@tanstack/react-table";

// Define the shape of the staff application data
export type StaffAccounts = {
  email: string;
  password: string;
  category: string;
};

export const columns: ColumnDef<StaffAccounts>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "password",
    header: "Password",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
];
