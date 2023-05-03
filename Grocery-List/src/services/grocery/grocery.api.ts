import { pb } from "../../../pocketbase";
import { Grocery } from "../../models/grocery";

type statusValue = "pending" | "done" | "deleted"

export function get(){
    return  pb.collection("grocery").getList<Grocery>();
}

export function create(data:{status:statusValue}){
    return pb.collection('grocery').create<Grocery>(data);
}

export function update(data:Partial<Grocery>){
    return pb.collection('grocery').update(data.id!, data);
}