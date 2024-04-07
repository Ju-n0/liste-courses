import './Header.scss';

interface SetProductsProps {
  inputProductValue: string;
  setInputProductValue: React.Dispatch<React.SetStateAction<string>>;
  addProduct: (string: string) => void;
}

function Header({ inputProductValue, setInputProductValue, addProduct }: SetProductsProps) {
  return (
<div className="form">
    <h1 className='form-title'>Ma super liste de course</h1>
    <form
      
      onSubmit={(event) => {
        event.preventDefault();
        addProduct(inputProductValue);
        setInputProductValue('');
      }}
    >
      <input
        type="text"
        className="form-item"
        value={inputProductValue}
        placeholder="Ajouter un produit à acheter"
        onChange={(event) => {
          setInputProductValue(event.target.value);
        }}
      />
    </form></div>
  );
}

export default Header;