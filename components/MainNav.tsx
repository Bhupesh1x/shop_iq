"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { Category } from "@/types";

type Props = {
  data: Category[];
};

export const MainNav = ({ data }: Props) => {
  const pathname = usePathname();

  const routes = useMemo(
    () =>
      data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
      })),
    [data, pathname]
  );

  return (
    <div className="mx-6 flex items-center gap-x-3">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`text-sm font-semibold transition-colors hover:text-black ${
            route.active ? "text-black" : "text-neutral-500"
          }`}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};
