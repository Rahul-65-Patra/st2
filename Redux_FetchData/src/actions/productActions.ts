
 type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
}


export const SET_PRODUCTS = 'SET_PRODUCTS';
export const RATE_PRODUCT = 'RATE_PRODUCT';

export const setProducts = (products: Product[]) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const rateProduct = (id: number) => ({
  type: RATE_PRODUCT,
  payload: id,
});

export const fetchProducts = () => {
  return async (dispatch: any) => {
    const res = await fetch('/products.json');
    const data: Product[] = await res.json();
    dispatch(setProducts(data));
  };
};
