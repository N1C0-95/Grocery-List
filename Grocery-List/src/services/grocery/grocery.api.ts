import { pb } from "../../../pocketbase";
import { Grocery } from "../../models/grocery";

export function get(){
    return  pb.collection("grocery").getList<Grocery>();
}