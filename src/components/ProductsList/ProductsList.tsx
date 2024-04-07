import './ProductsList.scss';
import { Trash} from 'react-feather';
import Product from '../../@types/product';

interface ProductsProps {
  productsToBuy: Product[];
  updateStatus: (number: number) => void;
  deleteProduct: (number: number) => void;
  
}

function ProductsList({
  productsToBuy,
  updateStatus,
  deleteProduct,
}: ProductsProps) {
  const arrayProducts = productsToBuy.map((product) => (
    <li className="product-item" key={product.id}>
      <label
        className={product.bought ? 'product-item-label product-item-label--bought' : 'product-item-label'}
      >
        <input
          className="item-checkbox"
          type="checkbox"
          defaultChecked={product.bought}
          onClick={() => {
            updateStatus(product.id);
          }}
        />
        <form className="item-form">
          <p className="item-p"
            
          >{product.label}</p>
        </form>
      </label>
      <button
        type="button"
        className="product-item-delete"
        onClick={() => {
          deleteProduct(product.id);
        }}
      >
        <Trash />
      </button>
    
    </li>
  ));


  return <ul className="products-container">{arrayProducts}</ul>;
}

export default ProductsList;