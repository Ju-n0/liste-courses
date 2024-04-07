import Product from '../../@types/product';
import ProductsCounter from '../ProductsCounter/ProductsCounter';
import ProductsList from '../ProductsList/ProductsList';

interface ProductsToBuyProps {
  productsToBuy: Product[];
  updateStatus: (number: number) => void;
  deleteProduct: (number: number) => void;
}

function Products({
  productsToBuy,
  updateStatus,
  deleteProduct,
}: ProductsToBuyProps) {
  return (
    <div>
     
      <ProductsList
        productsToBuy={productsToBuy}
        updateStatus={updateStatus}
        deleteProduct={deleteProduct}
      />
       <ProductsCounter productsToBuy={productsToBuy} />
    </div>
  );
}

export default Products;