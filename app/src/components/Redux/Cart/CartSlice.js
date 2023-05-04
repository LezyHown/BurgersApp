import { createSlice } from "@reduxjs/toolkit";
import productsAPI from "../../Pages/Home/Product/productsAPI";

const initialState = {
  products: [],
  totalCost: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProduct(state, action) {
      const { productId } = action.payload;
      const productsApi = productsAPI.chikenList;

      const product = productsApi.find(({ id }) => productId === id);
      if (product) {
        const productIndex = state.products.findIndex(({ id }) => id === productId);

        //add product as new { id, price, outPrice, amount, totalAmount }
        if (productIndex === -1) {
          state.products.push({
            id: product.id,
            image: product.image,
            name: String(product.name),
            amount: 1,
            price: Number(product.price),
            outPrice: Number(product.price),
            totalAmount: Number(product.quantity),
          });
        } else {
          //add amount to cart
          if(state.products[productIndex].amount < 99)
            state.products[productIndex].amount += 1;
        }
        //calculate total cost
        calculate(state);
      }
    },
    setAmount(state, action) {
      const { productId, count } = action.payload;
      const productIndex = state.products.findIndex(({ id }) => productId === id);
      if (productIndex >= 0) {
        state.products[productIndex].amount = Number(count);
      }
      //calculate total cost
      calculate(state);
    },
    removeProduct(state, action) {
      const { productId } = action.payload;
      const productIndex = state.products.findIndex(({ id }) => id === productId);
      if (productIndex >= 0) {
        state.products.splice(productIndex, 1);
      }
      calculate(state);
    },
  },
});

export const { addProduct, removeProduct, setAmount } = cartSlice.actions;

function calculate(state) {
  let totalCost = 0;
  const calculatedProducts = state.products.map((product) => {
    product.outPrice = (Number(product.amount) * Number(product.price)).toFixed(2);
    totalCost += Number(product.outPrice);
    return product;
  });

  state.products = calculatedProducts;
  state.totalCost = totalCost.toFixed(2);
}

export default cartSlice.reducer;