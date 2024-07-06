import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";


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

export const removeItem = "REMOVEITEM" 

export const rmvItem = (payload) => ({
  type: removeItem,
  payload,
})

export const removeAll = "REMOVEALL" 

export const rmvAll = (payload) => ({
  type: removeAll,
  payload,
})


export const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case addBasket:
    const existingItem = state.basket.find(item => item.id === payload.id);
    if (existingItem) {
      toastErrorNotify("This product is already in your cart.");
      return state;
    } else {
      toastSuccessNotify("Added to cart.")
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
        ),
      }

      case removeItem:
      return {
        ...state,
        basket: state.basket.filter((item) =>
          item.id != payload
        ),
      }

      case removeAll:
      return {
        ...state,
        basket: [],
      }
  default:
    return state
  }
}
