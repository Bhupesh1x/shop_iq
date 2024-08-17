import { URL } from "@/lib/utils";

import { Product } from "@/types";

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/products/${id}`);

  return await res.json();
};
