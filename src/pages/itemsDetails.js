import { useParams } from "react-router-dom"

export default function ItemDetails(){

    const param = useParams();
    // console.log(param);

    return(
        <>
        <main>
            <h1>Item Details</h1>
            <h2>{param.itemId}</h2>
        </main>
        </>
    )
}