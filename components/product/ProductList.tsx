import { Product } from "@/types";

import { NoResults } from "../NoResults";
import { ProductCard } from "./ProductCard";

type Props = {
  title: string;
  items: Product[];
};

export const ProductList = ({ title, items }: Props) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      {!items || !items.length ? <NoResults /> : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
