"use client";

import Image from "next/image";
import { useState } from "react";

import { Image as ImageType } from "@/types";

type Props = {
  images: ImageType[];
};

export const Gallery = ({ images }: Props) => {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className="relative aspect-[1.3/1] overflow-hidden rounded-md bg-gray-800">
        <Image
          fill
          src={images?.[selected]?.url || ""}
          alt="product-image"
          className="object-cover object-center rounded-md"
        />
      </div>

      <div className="flex gap-4 flex-wrap mt-4">
        {images?.map((image, index) => (
          <div
            key={image.id}
            className={`relative h-[70px] w-[70px] rounded-md cursor-pointer z-20 transition ${
              selected === index ? "border-[1.5px] border-black" : ""
            }`}
            onClick={() => setSelected(index)}
          >
            <Image
              fill
              src={image.url || ""}
              alt="product-image"
              className={"object-cover rounded-md p-[3px]"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
