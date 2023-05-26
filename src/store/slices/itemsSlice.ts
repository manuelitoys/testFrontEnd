import { createSlice } from '@reduxjs/toolkit'

export interface itemsState {
  value: boolean
}

const initialState: itemsState = {
  value: true
}

export const itemsSlice = createSlice({
  name: 'itemsSlice',
  initialState,
  reducers: {
        

  },
})

// Action creators are generated for each case reducer function
export const {  } = itemsSlice.actions
