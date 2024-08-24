"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

import { Color, Size } from "@/types";

import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/IconButton";

import { Filter } from "./Filter";

type Props = {
  sizes: Size[];
  colors: Color[];
};

export const MobileFilters = ({ sizes, colors }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        className="flex items-center gap-3 lg:hidden"
        onClick={handleOpen}
      >
        <p className="text-sm">Filters</p>
        <Plus size={15} />
      </Button>
      <Dialog
        open={open}
        as="div"
        onClose={handleClose}
        className="relaive z-40 lg:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-40" />

        <div className="fixed z-40 inset-0 flex">
          <Dialog.Panel className="ml-auto max-w-xs bg-white py-4 h-full w-full flex-col overflow-y-auto pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={handleClose} />
            </div>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
