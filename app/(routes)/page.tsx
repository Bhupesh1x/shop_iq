import { getProducts } from "@/actions/products/get-products";
import { getBillboard } from "@/actions/billboards/get-billboards";

import { Billboard } from "@/components/Billboard";
import { ProductList } from "@/components/product/ProductList";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("9caca6d1-834f-4263-876d-f29670c5c86a");
  const products = await getProducts({ isFeatured: true });

  return (
    <div className="main-container">
      <div className="space-y-7 my-8">
        <Billboard billboard={billboard} />
        <div>
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
