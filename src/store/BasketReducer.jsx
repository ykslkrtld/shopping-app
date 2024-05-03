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
    return { 
        basket: [...state.basket, payload ]
     }

  default:
    return state
  }
}
