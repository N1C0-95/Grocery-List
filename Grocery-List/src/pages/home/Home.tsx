import { useEffect, useState } from "react";
import { pb } from "../../../pocketbase";
import { Category } from "../../models/category";
import { HomeHistoryList } from "./components/HomeHistoryList";

import { HomeForm } from "./components/HomeForm";
import { useGroceryService } from "../../services/grocery";
import { HomeList } from "./components/HomeList";

export function Home() {
   const [categoryList, setCategoryList] = useState<Category[]>()

   const {actions, state} = useGroceryService();
  // const [products, setProducts] = useState<Product[]>()
  // const [locations, setLocations] = useState<Locations[]>();
  useEffect(() => {
      //pb.collection("products").getList<Product>().then((res) => setProducts(res.items))
      pb.collection("category").getList<Category>().then((res) => setCategoryList(res.items))
      //pb.collection("location").getList<Locations>().then((res) => setLocations(res.items))
      actions.getGroceries()
  }, [])

  
  return (
    <>
      <div className="title">Home</div>

      {state.error && alert(state.error)}

      <div className="flex justify-center">     
          <HomeList grocery={state.grocery}/>
      </div>
      <div className="mt-10 mb-10 flex justify-center">
        {state.grocery === null  && (
          <button className="btn primary large"
          onClick={actions.createGrocery}>crea una nuova lista</button>
        )}
        {state.grocery && <HomeForm 
          categoryList={categoryList!} 
          currentGrocery={state.grocery}
          updateGrocery={actions.updateGrocery}
        />}
      </div>
      <HomeHistoryList/>
      
      
      {/*<pre>{JSON.stringify(state.grocery,null,2)}</pre>*/} 
    </>
  );
}
