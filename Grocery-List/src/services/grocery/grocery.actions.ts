import { Product } from "../../models/products";

type ProductGetSuccess = {type:"groceryGetSuccess", payload:Product[]}
type ProductAddSuccess  = {type:"productAddSuccess", payload:Product}
type Error  = { type: 'error', payload: string };
type Pending  = { type: 'pending', payload: boolean };

export type GroceryActions =  
    ProductGetSuccess |
    ProductAddSuccess |
    Error |
    Pending