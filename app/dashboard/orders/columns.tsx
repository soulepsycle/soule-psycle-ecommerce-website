"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
  order_id: number;
  customer_name: string;
  customer_email: string;
  order_date: string;
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  shipping_address: string;
  status: string;
}

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "order_id",
    header: "Order#",
  },
  {
    accessorKey: "customer_name",
    header: "Customer Name",
  },
  {
    accessorKey: "customer_email",
    header: "Customer Email",
  },
  {
    accessorKey: "order_date",
    header: "Order Date",
  },
  {
    accessorKey: "product_name",
    header: "Product Name",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "unit_price",
    header: "Unit Price",
  },
  {
    accessorKey: "total_price",
    header: "Total Price",
  },
  {
    accessorKey: "shipping_address",
    header: "Shipping Address",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]
