import { create } from "zustand";

import { Product } from "@/types";

type PreviewModalStore = {
  data?: Product;
  isOpen: boolean;
  onOpen: (data: Product) => void;
  onClose: () => void;
};

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  data: undefined,
  isOpen: false,
  onOpen: (data: Product) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));
