import qs from "query-string";

import { URL } from "@/lib/utils";

import { Product } from "@/types";

type Query = {
  sizeId?: string;
  colorId?: string;
  categoryId?: string;
  isFeatured?: boolean;
};

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: `${URL}/products`,
    query: {
      sizeId: query.sizeId,
      colorId: query.colorId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url);

  return await res.json();
};
