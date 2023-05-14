import { Grocery } from "../../models/grocery";
import { GroceryActions } from "./grocery.actions";

interface GroceryState{
    grocery:Grocery | null,
    error: string | null,
    pending: boolean
}

export const initialState:GroceryState = {
    grocery:null,
    error:null,
    pending:false
}


export function groceryReducer(state:GroceryState, action:GroceryActions){
    switch(action.type){
        
        case "groceryGetSuccess" :{
            return {
                ...state, 
                grocery:action.payload,
                pending:false,
                error:null
            }
        }
        case "groceryAddSuccess":{
            return {
                ...state, 
                grocery:action.payload,
                pending:false,
                error:null
            }
        }
        case "groceryUpdateSuccess":{
            return {
                ...state, 
                grocery:action.payload,
                pending:false,
                error:null
            }
        }
        case "error" : {
            return {...state, pending:false, error:action.payload }
        }
        case "pending" : {
            return {...state, pending: action.payload, error:null}
        }

        return state
    }

}