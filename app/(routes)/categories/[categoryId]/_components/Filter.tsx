"use client";

import qs from "query-string";

import { Color, Size } from "@/types";

import { Button } from "@/components/ui/Button";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  name: string;
  valueKey: string;
  data: (Size | Color)[];
};

export const Filter = ({ name, data, valueKey }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const handleClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div>
      <h1 className="text-lg font-semibold">{name}</h1>
      <hr className="my-3" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <Button
            onClick={() => handleClick(filter.id)}
            key={filter.id}
            className={`bg-white border border-gray-300 !text-gray-800 rounded-md text-sm p-2 ${
              selectedValue === filter.id && "!bg-black !text-white"
            }`}
          >
            {filter.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
