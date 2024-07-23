'use client';

import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from 'next/link'
import {
    Home,
    LineChart,
    Package,
    ShoppingCart,
    Users,
  } from "lucide-react"
import { Badge } from '../ui/badge'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const links = [
    {link: '/dashboard', label: 'Dashboard', icon: Home},
    {link: '/dashboard/orders', label: 'Orders', icon: ShoppingCart},
    {link: '/dashboard/products', label: 'Products', icon: Package},
    {link: '/dashboard/customers', label: 'Customers', icon: Users},
    {link: '/dashboard/analytics', label: 'Analytics', icon: LineChart},
]

export const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {links.map((item) => {
                const {link, label, icon} = item;
                const NavIcon = icon;
                return (
                    <Link
                    key={label}
                    href={link}
                    className={clsx(
                       "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                       {
                        "text-primary": pathname === link
                       }
                    )}
                  >
                    <NavIcon className="h-4 w-4" />
                    {label}
                  </Link>
                )
            })}
              {/* <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Products{" "}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link> */}
            </nav>
  )
}
