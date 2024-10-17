import { createContext, Dispatch } from "react";
import { Action, CartState } from "./cartReducer";

interface CartContextType {
    state: CartState,
    dispatch: Dispatch<Action>
}


export const CartContext = createContext({} as CartContextType)