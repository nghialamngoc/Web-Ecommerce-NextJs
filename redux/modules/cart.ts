import { createSlice } from '@reduxjs/toolkit'

const initState: ICart = {
  cartId: '123123',
  detail: [{}],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    testReducer: (state, action) => {
      // mutation
      state.cartId = action.payload
    },
  },
})

export default cartSlice.reducer
