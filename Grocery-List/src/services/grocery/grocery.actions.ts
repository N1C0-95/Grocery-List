import { Grocery } from "../../models/grocery";

type GroceryAddSuccess = {type:"groceryAddSuccess", payload:Grocery}
type GroceryGetSuccess = {type:"groceryGetSuccess", payload:Grocery}
type GroceryUpdateSuccess  = {type:"groceryUpdateSuccess", payload:Grocery}
type Error  = { type: 'error', payload: string };
type Pending  = { type: 'pending', payload: boolean };

export type GroceryActions =  
    GroceryAddSuccess |
    GroceryGetSuccess |
    GroceryUpdateSuccess |
    Error |
    Pending