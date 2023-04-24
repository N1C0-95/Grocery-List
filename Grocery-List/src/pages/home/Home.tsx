import { useEffect, useState } from 'react';
import {pb} from '../../../pocketbase'
import { Category } from '../../models/category';
import { Product } from '../../models/products';
import { Locations } from '../../models/location';

export function Home(){

   
    const [categoryList, setCategoryList] = useState<Category[]>()
    const [products, setProducts] = useState<Product[]>()
    const [locations, setLocations] = useState<Locations[]>();
    useEffect(() => {
        pb.collection("products").getList<Product>().then((res) => setProducts(res.items))
        pb.collection("category").getList<Category>().then((res) => setCategoryList(res.items))
        pb.collection("location").getList<Locations>().then((res) => setLocations(res.items))
    }, [])
    
    return (
        <div>
            home content here ! 
            {
                categoryList &&  categoryList.map((category) => {
                    return (
                        <li key={category.id}>
                            {`name : ${category.name}`} - {`id: ${category.id}`} 
                            - {`locationId : ${category.field}`} 
                        </li>
                    )
                })
            }
            <br/>
            {
                products &&  products.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name} - {item.field}
                        </li>
                    )
                })
            }
            <br/>
            {
                locations &&  locations.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name} - {item.id}
                        </li>
                    )
                })
            }
            {/*<pre>{JSON.stringify(categoryList,null,2)}</pre>*/}
        </div>
    )
}