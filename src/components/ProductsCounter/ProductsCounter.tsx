import Product from '../../@types/product';
import './ProductsCounter.scss';

interface ProductsProps {
  productsToBuy: Product[];
}

function ProductsCounter({ productsToBuy }: ProductsProps) {
  const productsBoughts = productsToBuy.filter((product) => !product.bought);
  const productCount = productsBoughts.length;
  return <p className="counter">{productCount} produits à acheter</p>;
}

export default ProductsCounter;