import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export function ErrorPage(){
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(() => {
            navigate(-1)
        }, 3000);
    },[])
    return(
        <>
            <main><h1>Something went wrong..!</h1></main>
        </>
    )
}