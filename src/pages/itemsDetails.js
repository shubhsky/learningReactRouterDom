import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemsData";

export default function ItemDetails(){

    const {itemId} = useParams();
    console.log(itemId)
    // console.log(param);

    const item = ITEMS.find((item)=>item.id ===itemId);
    // console.log(item)

    return(
        <>
        <main>
            <h1>Item Details</h1>
        </main>
        <h2>{item.title}</h2>
        <h3>{item.description}</h3>
        </>
    )
}