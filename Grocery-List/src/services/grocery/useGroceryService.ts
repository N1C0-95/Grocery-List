import { useReducer } from "react";
import { groceryReducer, initialState } from "./grocery.reducer";
import * as GroceryService from "./grocery.api";
import { Grocery } from "../../models/grocery";




export function useGroceryService(){
    const [state, dispatch] = useReducer(groceryReducer, initialState )

    async function getGroceries(){
        dispatch({ type: 'pending', payload: true })
        try{
            const response = await GroceryService.get()
            //check 1 Pending
            const pendingList = response.items.filter(item => item.status === "pending")

            if(pendingList.length === 1){  

                dispatch({type:"groceryGetSuccess", payload:pendingList[0]})               
            
            }
            else if(pendingList.length > 1){
                dispatch({type: 'error', payload: "esistono più di una lista in pending" })
            }
                 
            
        }
        catch(e){

        }
    }

    async function createGrocery(){
        try{
            GroceryService.create({status:"pending"})
                .then(res =>dispatch({type:"groceryGetSuccess", payload:res})) 

        }
        catch(e){
            dispatch({type: 'error', payload: "errore durante la creazione" })
        }
    }

    async function updateGrocery(data:Partial<Grocery>){
            try{
                GroceryService.update(data)
            }
            catch(e){
                console.log(e)
                dispatch({type: 'error', payload: "errore durante l'aggiornamento" })
            }
       
        
    }
    return {
        actions:{getGroceries, createGrocery, updateGrocery},
        state
    }
}