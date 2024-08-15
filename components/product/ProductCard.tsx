"use client";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";

import { formatter } from "@/lib/utils";

import { IconButton } from "@/components/IconButton";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-white border border-neutral-400 shadow rounded-md p-3">
      {/* Image and actions */}
      <div className="group relative aspect-square rounded-xl bg-gray-400">
        <Image
          src={product?.images?.[0]?.url}
          alt="product-image"
          fill
          className="object-cover rounded-md aspect-square"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 w-full">
          <div className="flex gap-5 justify-center w-full">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-lg font-semibold">{product.name}</h1>
        <p className="text-gray-500 text-sm">{product.category.name}</p>

        <p className="mt-4 font-semibold">
          {formatter.format(parseInt(product.price))}
        </p>
      </div>
    </div>
  );
};
