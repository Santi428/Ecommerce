import { CartProduct } from "../interfaces/product";

export interface CartState{
    cartItems: CartProduct[]
}

export const initialState: CartState = {
    cartItems: [],

}


export interface Action  {
    type: 'ADD' | 'REMOVE' | 'CLEAR_CART';
    payload: CartProduct;
}




  

export const cartReducer = (state: CartState, action: Action): CartState => {
    switch(action.type){
        case "ADD": {
            const {id} = action.payload
            const existe = state.cartItems.find((item: CartProduct) => item.id === id)
            if(existe){
                return {
                    ...state,
                    cartItems: state.cartItems.map((item: CartProduct) => item.id === id ? {...existe, quantity: existe.quantity + 1} : item)
                }
            } else {
                return {
                    ...state, cartItems: [...state.cartItems, action.payload]
                }
            }
        }
        case "REMOVE": {
            const {id} = action.payload

            const existe = state.cartItems.find((item: CartProduct) => item.id === id)

            if (existe){
                if(existe.quantity === 1){
                    return {
                        ...state,
                        cartItems: state.cartItems.filter((item: CartProduct) => item.id !== id)
                    }
                } else {
                    return{
                        ...state, cartItems: state.cartItems.map((item: CartProduct) => item.id === id ? {...existe, quantity: existe.quantity - 1} : item)
                    }
                }
            }
            return state
        }

        case 'CLEAR_CART': {
            return {
                ...state,
                cartItems: []
            }
        }

        default: {
            return state
        }
    }
}