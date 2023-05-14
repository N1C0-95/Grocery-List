import { useEffect, useState } from "react";
import { useGroceryService } from "../../services/grocery";
import { Product } from "../../models/products";


export function Grocery(){
    
    const [cartList, setCartList] = useState<Partial<Product>[]>([])
    const [shoppingList, setShoppingList] = useState<Partial<Product>[]>([])
    const {actions, state} = useGroceryService();
    
    function addToCart(item:Partial<Product>){
        console.log(item)
        setCartList(state =>[...state, item])
        setShoppingList(state => state.filter(product => product.id != item.id))
        
    }
   
    useEffect(() =>{
        
        actions.getGroceries().then(result => {
            const data = state.grocery?.products
        console.log(data)
        if(data){
            setShoppingList(s => [...s, ...data])
        }
        console.log(shoppingList)
        } );
        
        
        
    }, [])
    return(
        <>
        <div className="title">
            list
        </div>
        <div className="text-center">
        {
                state.grocery?.products.map((item)=>{
                    return(
                        <div key={item.id} className="flex justify-around border border-red-500 m-3">
                            <li>{item.name}</li>
                            <button className="btn primary" onClick={() => addToCart(item)}>add</button>
                        </div>
                        
                    )

                })
            }
        </div>
        <div className="text-center">
        {
                cartList.map((item)=>{
                    return(
                        <div key={item.id} className="flex justify-around border border-green-500 m-3">
                            <li className="text-green-400 line-through">{item.name}</li>
                            <button className="btn primary">add</button>
                        </div>
                        
                    )

                })
            }
        </div>
        </>
    )
}