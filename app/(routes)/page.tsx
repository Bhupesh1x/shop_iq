import { getBillboard } from "@/actions/billboards/get-billboards";

import { Billboard } from "@/components/Billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("9caca6d1-834f-4263-876d-f29670c5c86a");

  return (
    <div className="main-container">
      <div className="py-7">
        <Billboard billboard={billboard} />
      </div>
    </div>
  );
};

export default HomePage;
