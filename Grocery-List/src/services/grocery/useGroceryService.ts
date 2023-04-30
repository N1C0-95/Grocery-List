import { useReducer } from "react";
import { groceryReducer, initialState } from "./grocery.reducer";
import * as GroceryService from "./grocery.api";

export function useGroceryService(){
    const [state, dispatch] = useReducer(groceryReducer, initialState )

    async function getGroceries(){
        dispatch({ type: 'pending', payload: true })
        try{
            const response = await GroceryService.get()
            //check 1 Pending
            const isPending = response.items.filter(item => item.status === "pending")

            if(isPending.length === 1){
                console.log("dispatch attuale valore")
            }
            else if(isPending.length > 1){
                console.log("dispatch errore")
            }
            else{
                console.log("non fare un cazzo la lista deve rimanere vuota")
            }
            
            
        }
        catch(e){

        }
    }

    return {
        actions:{getGroceries},
        state
    }
}