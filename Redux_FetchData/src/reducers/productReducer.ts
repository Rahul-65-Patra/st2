
import { SET_PRODUCTS, RATE_PRODUCT } from "../actions/productActions";

 type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
}


interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

type Action =
  | { type: typeof SET_PRODUCTS; payload: Product[] }
  | { type: typeof RATE_PRODUCT; payload: number };

export const productReducer = (
  state = initialState,
  action: Action
): ProductState => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case RATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, rating: product.rating + 1 }
            : product
        ),
      };
    default:
      return state;
  }
};
