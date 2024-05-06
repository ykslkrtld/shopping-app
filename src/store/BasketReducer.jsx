const initialState = {
    basket: [],
}

export const addBasket = "ADDBASKET" 

export const addToBasket = (payload) => ({
  type: addBasket,
  payload,
})


export const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case addBasket:
    return state.basket.includes(payload)
    ? (alert("Bu ürün zaten sepetinizde var!"), { ...state})
    : { basket: [...state.basket, payload] };

  default:
    return state
  }
}
