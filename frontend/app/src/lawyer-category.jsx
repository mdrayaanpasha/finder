import axios from "axios";
import { useEffect } from "react";

function LawyersCat(){
    const finder =  new URLSearchParams(window.location.search);
    const cat = finder.get("category");

    useEffect(()=>{
        const F = async ()=>{
            try {
                const response =  await axios.post("http://localhost:3000/lawCat",{
                    category:cat
                })
            } catch (error) {
                console.log(error)
            }
        }
        F();
    },[])
    

    return(
        <p>you are looking for: {category}</p>
    )
}

export default LawyersCat;