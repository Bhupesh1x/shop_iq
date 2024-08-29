"use client";

import { usePreviewModal } from "@/hooks/usePreviewModal";

import { Modal } from "@/components/Modal";
import { Info } from "@/components/product/Info";
import { Gallery } from "@/components/product/Gallery";

export const PreviewModal = () => {
  const { data: product, isOpen, onClose } = usePreviewModal();

  if (!product) {
    return null;
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="w-full grid grid-cols-1 items-start sm:grid-cols-12 gap-x-6 gap-y-8 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info product={product} />
        </div>
      </div>
    </Modal>
  );
};
