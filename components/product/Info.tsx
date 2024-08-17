import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";

import { formatter } from "@/lib/utils";

import { Button } from "@/components/ui/Button";

type Props = {
  product: Product;
};

export const Info = ({ product }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
        {product.name}
      </h2>
      <p className="text-xl font-semibold my-1">
        {formatter.format(parseInt(product.price))}
      </p>

      <hr className="my-3" />

      <p>
        <span className="font-semibold mr-2">Size:</span> {product.size.name}
      </p>
      <div className="flex items-center gap-2 mt-4">
        <span className="font-semibold mr-2">Color:</span>
        <div
          className="h-6 w-6 rounded-full"
          style={{ backgroundColor: product.color.value }}
        />
      </div>

      <Button className="flex items-center gap-2 mt-8">
        Add To Cart <ShoppingCart />
      </Button>
    </div>
  );
};
