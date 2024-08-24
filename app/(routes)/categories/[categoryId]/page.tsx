import { getSizes } from "@/actions/sizes/get-sizes";
import { getColors } from "@/actions/colors/get-colors";
import { getProducts } from "@/actions/products/get-products";
import { getCategory } from "@/actions/categories/get-category";

import { Billboard } from "@/components/Billboard";
import { NoResults } from "@/components/NoResults";
import { ProductCard } from "@/components/product/ProductCard";

import { Filter } from "./_components/Filter";

type Props = {
  params: { categoryId: string };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
};

export const revalidate = 0;

const CategoryPage = async ({ params, searchParams }: Props) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white space-y-4 pb-6">
      <div className="main-container">
        <Billboard billboard={category.billboard} />
      </div>
      <div className="main-container space-y-4">
        <div className="lg:grid lg:grid-cols-5 gap-2 mt-8">
          <div className="hidden md:block space-y-4">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-4">
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
