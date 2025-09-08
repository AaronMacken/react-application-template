import { useState, ChangeEvent, FormEvent, ReactNode } from 'react';

type ProductInput = {
  productName: string;
  quantity: string;
};

const INITIAL_STATE = {
  productName: '',
  quantity: '1'
};

const validateField = (name: keyof ProductInput, value: string) => {
  switch (name) {
    case 'productName':
      return value.length < 2 ? 'Your name must be three characters or more' : '';

    case 'quantity':
      return Number(value) < 1 ? 'Quantity must be one ore more' : '';

    default:
      return '';
  }
};

const ErrorLabel = ({ children }: { children: ReactNode }) => {
  return <p style={{ color: 'red' }}>{children}</p>;
};

const ProductForm = () => {
  const [productInput, setProductInput] = useState<ProductInput>(INITIAL_STATE);
  const [inputErrors, setInputErrors] = useState<Partial<ProductInput>>({});

  const handleProductInputUpdate = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setProductInput((previousInputValues) => ({ ...previousInputValues, [name]: value }));
  };

  const handleBlur = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    const error = validateField(name as keyof ProductInput, value);

    setInputErrors((previousErrors) => ({
      ...previousErrors,
      ...(error ? { [name]: error } : { [name]: undefined })
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasErrors = Object.values(inputErrors).some((val) => Boolean(val));

    if (!hasErrors) {
      console.log(productInput);
    } else console.log(inputErrors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Product Form</h2>
      <label>
        Product Name
        {inputErrors.productName && <ErrorLabel>{inputErrors.productName}</ErrorLabel>}
        <input
          required
          type="text"
          name="productName"
          placeholder="Product Name"
          onBlur={handleBlur}
          onChange={handleProductInputUpdate}
        />
      </label>
      <label>
        Quantity
        {inputErrors.quantity && <ErrorLabel>{inputErrors.quantity}</ErrorLabel>}
        <input
          required
          type="number"
          name="quantity"
          onBlur={handleBlur}
          onChange={handleProductInputUpdate}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
