import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, rateProduct } from './actions/productActions';
import { RootState } from './store';

const ProductsList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.productState.products);

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  return (
    <div>
      <h2>Product List</h2>
      {products.map(p => (
        <div key={p.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h3>{p.name}</h3>
          <p>Brand: {p.brand}</p>
          <p>Price: ${p.price}</p>
          <p>Rating: {p.rating}</p>
          <button onClick={() => dispatch(rateProduct(p.id))}>Rate</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
