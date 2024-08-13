import { URL } from "@/lib/utils";

import { Billboard } from "@/types";

export const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/billboards/${id}`);

  return await res.json();
};
