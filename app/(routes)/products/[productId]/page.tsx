import { getProduct } from "@/actions/products/get-product";
import { getProducts } from "@/actions/products/get-products";

import { Info } from "@/components/product/Info";
import { Gallery } from "@/components/product/Gallery";
import { ProductList } from "@/components/product/ProductList";

type Props = {
  params: {
    productId: string;
  };
};

export const revalidate = 0;

async function ProductPage({ params }: Props) {
  const product = await getProduct(params.productId);
  const products = await getProducts({ categoryId: product.category.id });

  return (
    <div className="main-container py-2">
      <div className="lg:grid lg:grid-cols-2 lg:gap-3 lg:items-start lg:gap-x-8">
        <Gallery images={product.images} />
        <div className="mt-10 px-4 sm:mt-16 lg:mt-0">
          <Info product={product} />
        </div>
      </div>
      <div className="my-10">
        <ProductList title="Related Items" items={products} />
      </div>
    </div>
  );
}

export default ProductPage;
