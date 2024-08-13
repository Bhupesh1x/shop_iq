import { Billboard as BillboardType } from "@/types";

type Props = {
  billboard: BillboardType;
};

export const Billboard = ({ billboard }: Props) => {
  return (
    <div className="">
      <div
        className="aspect-square flex items-center justify-center bg-cover rounded-md md:aspect-[2.8/1] overflow-hidden text-center"
        style={{ backgroundImage: `url(${billboard?.imageUrl})` }}
      >
        <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black">
          {billboard.label}
        </h1>
      </div>
    </div>
  );
};
