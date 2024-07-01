const initialState = {
    basket: [],
}

export const addBasket = "ADDBASKET" 

export const addToBasket = (payload) => ({
  type: addBasket,
  payload,
})

export const plusItem = "PLUSITEM" 

export const plsItem = (payload) => ({
  type: plusItem,
  payload,
})

export const minusItem = "MINUSITEM" 

export const mnsItem = (payload) => ({
  type: minusItem,
  payload,
})


export const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case addBasket:
    const existingItem = state.basket.find(item => item.id === payload.id);
    if (existingItem) {
      alert("Bu ürün zaten sepetinizde bulunmaktadır.");
      return state;
    } else {
      return {
        ...state,
        basket: [...state.basket, { ...payload, quantity: 1 }]
      };
    }
    case plusItem:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id == payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      }
    case minusItem:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id == payload ? { ...item, quantity: item.quantity - 1 } : item
        ).filter((item) => item.quantity > 0),
      }
  default:
    return state
  }
}
