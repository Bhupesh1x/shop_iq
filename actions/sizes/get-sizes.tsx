import { Size } from "@/types";

import { URL } from "@/lib/utils";

export const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(`${URL}/sizes`);

  return await res.json();
};
