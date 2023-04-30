import { useEffect, useState } from "react";
import { pb } from "../../../pocketbase";
import { Category } from "../../models/category";
import { Product } from "../../models/products";
import { Locations } from "../../models/location";


import bar from "../../assets/bar-graph.png";
import { HomeList } from "./components/HomeList";
import { useNavigate } from "react-router-dom";
import { HomeForm } from "./components/HomeForm";
import { useGroceryService } from "../../services/grocery";
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

  const navigate = useNavigate();
  return (
    <>
      <div className="title">Home</div>

      <div className="flex sm:gap-2 ">
        <div className="sm:flex sm:flex-col items-center w-full invisible sm:visible sm:w-[45%] h-72 text-center border border-solid border-[#f8f9fa] shadow-soft-xl rounded-2xl bg-white">
          <p className="pt-2 mb-1 font-semibold">Grafico 1</p>
          <h5 className="font-bold">Soft UI Dashboard</h5>
          <img src={bar} className="w-48" />
  </div>
        <div className="flex flex-col w-full sm:w-[45%] h-72 text-center border border-solid border-[#f8f9fa] shadow-soft-xl rounded-2xl bg-white">
          <p className="font-semibold">Lista Name</p>
          <table className="table-auto w-full hover mt-10">
          <thead>
            <tr>
              <th>Name</th>              
              <th>Quantity</th>              
            </tr>
          </thead>
          <tbody >
            <tr className="border-b-2">
                <td>Iteme 1</td>
                <td>2</td>
            </tr>
            <tr className="border-b-2">
                <td>Iteme 2</td>
                <td>4</td>
            </tr>
            <tr className="border-b-2">
                <td>Iteme 3</td>
                <td>1</td>
            </tr>
            </tbody>
        </table>
        <div className="mt-auto text-right">
          <button className="btn secondary w-48" onClick={() => {
            navigate("/grocery")
          }}>
            view all products
          </button>

        </div>
          
        </div>
      </div>
      <div className="mt-10 mb-10 flex justify-center">
        {false  && (
          <button className="btn primary large">crea una nuova lista</button>
        )}
        {true && <HomeForm categoryList={categoryList!} />}
      </div>
      <HomeList/>

      {/*<pre>{JSON.stringify(categoryList,null,2)}</pre>*/}
    </>
  );
}
