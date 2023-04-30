import { Product } from "../../models/products";
import { GroceryActions } from "./grocery.actions";

interface GroceryState{
    products:Product[],
    error: string,
    pending: boolean
}

export const initialState:GroceryState = {
    products:[],
    error:"",
    pending:false
}


export function groceryReducer(state:GroceryState, action:GroceryActions){
    switch(action.type){
        
        case "groceryGetSuccess" :{
            return {
                ...state, 
                products:action.payload
            }
        }
        case "productAddSuccess" :{
            return {
                ...state, 
                products:[...state.products, action.payload]
            }
        }
        case "error" : {
            return {...state, error:action.payload }
        }
        case "pending" : {
            return {...state, pending: action.payload}
        }

        return state
    }

}