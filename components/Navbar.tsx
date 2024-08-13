import Link from "next/link";

import { getCategories } from "@/actions/categories/get-categories";

import { MainNav } from "@/components/MainNav";
import { NavbarActions } from "@/components/NavbarActions";

export const revalidate = 0;

export const Navbar = async () => {
  const categories = await getCategories();

  return (
    <nav className="border-b h-16 flex items-center">
      <div className="main-container relative flex items-center">
        <Link href="/">
          <h1 className="font-bold tracking-tight text-xl">STORE</h1>
        </Link>
        <MainNav data={categories} />
        <NavbarActions />
      </div>
    </nav>
  );
};
