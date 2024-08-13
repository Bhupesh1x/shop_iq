import { URL } from "@/lib/utils";

import { Category } from "@/types";

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${URL}/categories`);

  return await res.json();
};
