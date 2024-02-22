"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/${params.storeId}`, // 确保这里使用的是正确的参数名
      label: "Overview",
      active: pathname === `/${params.storeId}`, // 确保这里使用的是正确的参数名
    },
    {
      href: `/${params.storeId}/billboards`, // 确保这里使用的是正确的参数名
      label: "Billboards",
      active: pathname === `/${params.storeId}/billboards`, // 确保这里使用的是正确的参数名
    },
    {
      href: `/${params.storeId}/settings`, // 确保这里使用的是正确的参数名
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`, // 确保这里使用的是正确的参数名
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
