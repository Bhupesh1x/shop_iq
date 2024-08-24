import { URL } from "@/lib/utils";

import { Category } from "@/types";

export const getCategory = async (categoryId: string): Promise<Category> => {
  const res = await fetch(`${URL}/categories/${categoryId}`);

  return await res.json();
};
