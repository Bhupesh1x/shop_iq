import { Color } from "@/types";

import { URL } from "@/lib/utils";

export const getColors = async (): Promise<Color[]> => {
  const res = await fetch(`${URL}/colors`);

  return await res.json();
};
