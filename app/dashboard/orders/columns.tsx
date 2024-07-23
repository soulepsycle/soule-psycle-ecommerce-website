"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
  id: number
  amount: string
  quantity: number
  email: string
}

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "order",
    header: "Order#",
  },
  {
    accessorKey: "quantity",
    header: "Qty",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
]
