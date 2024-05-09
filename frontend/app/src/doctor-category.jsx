import axios from "axios";
import { useEffect, useState } from "react";
import Img1 from "./assets/coin.png"
import Img2 from "./assets/location.png"
import Img3 from "./assets/suitcase.png"
import stet from "./assets/stethoscope.png"

function DoctorsCat() {
    const [category, setCategory] = useState(null);
    const [Cat,setCat] = useState(null)
    const categorySearch = new URLSearchParams(window.location.search);
    const [Data, setData] = useState(null)
    useEffect(() => {
        async function fetchData() {
            const category = categorySearch.get("category");
            setCategory(category);
            setCat(category)

            try {
                const response = await axios.post("http://localhost:3000/doccat", {
                    category: category
                });
                setData(response.data.d)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [categorySearch]); 

    function capitalizeString(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

   const submitthis =  (id) => {
    let formEle = document.getElementById(id);
    formEle.submit();
   }

    return (
        <>
        <style>
            {
                `
                .card{
                    background-color:#A2CFFE;
                    color: #fff;
                    border:none;
                    padding:1vw;
                    width:98vw;
                    margin-left:1vw;
                }
                
                `
            }
        </style>
            <header>
               <div className="logo"><img src={stet} alt="" /></div> <h3>{Cat}</h3>
            </header>
            
            {Data && Data.map(ele=>(
                <div className="card">
                    <div>
                        <center><h4>{ele.name}</h4></center>
                    </div>
                    
                    <form className="flex-card" method="get" id={ele._id} action="/proffessional" onClick={()=>submitthis(ele._id)}>
                        <div className="flex-card"><img src={Img3} alt="" /><small>{ele.workExp}+yrs</small></div>
                        <div className="flex-card"><img src={Img2} alt="" /><small>{capitalizeString(ele.location)}, {ele.city}</small></div>
                        <div className="flex-card"><img src={Img1} alt="" /><small>{ele.fees}</small></div>
                        <input type="hidden" name="id" value={ele._id} />
                    </form>
                    </div>                
            ))}
        </>
    );
}

export default DoctorsCat;
