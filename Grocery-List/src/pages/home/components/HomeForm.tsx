import { ChangeEvent, FormEvent, useState } from "react"
import { Category } from "../../../models/category"
import {useGroceryService} from "../../../services/grocery/useGroceryService"
import { Product } from "../../../models/products"
import { Grocery } from "../../../models/grocery"

interface HomeFormProps {
    categoryList : Category[],
    currentGrocery:Partial<Grocery>
}
const initialFormState : Partial<Product> = {
    name:"",
    category :"",
    quantity:0
}
export function HomeForm(props:HomeFormProps){

    const [formData, setFormData] = useState<Partial<Product>>(initialFormState)
    const {actions} = useGroceryService();

    const isNameValid = formData.name?.length;
    const isCategoryValid = formData.category?.length;
    const isQuantityValid = formData.quantity

    const isValid = isNameValid && isCategoryValid && isQuantityValid

    function changeHandler(e:ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;        
        setFormData(state => ({...state, [name]:value}) )
    }
    
    function savehandler(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(props.currentGrocery)
        
        const products = [...props.currentGrocery.products!, ...[formData]]        
        const groceryUpdated:Partial<Grocery> = {...props.currentGrocery, products}
                
        actions.updateGrocery(groceryUpdated)
    }

 
    
    return(
        
        <form className="flex flex-col w-full sm:w-[50%] m-auto gap-2" onSubmit={savehandler}>
            Name
            <input type="text" name="name" required minLength={5}
            onChange={changeHandler} />
            Category
            <select name="category" defaultValue={'DEFAULT'} onChange={changeHandler}>
              <option value="DEFAULT" disabled hidden> -- Please choose an option -- </option>
              {props.categoryList && props.categoryList.map((item) =>{
                return(<option value={item.id} key={item.id}>{item.name}</option>)
              })}
            </select>
            Quantity
            <input type="number" name="quantity" defaultValue={formData.quantity} onChange={changeHandler} 
             min="0" max="6" />
            <button className="btn primary" disabled={!isValid} > Add Item</button>
          </form>
        
    )
}