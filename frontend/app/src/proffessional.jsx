import axios from "axios";
import { useEffect, useState } from "react";

import docImg from "./assets/doctor.png"
import iconPhone from "./assets/phone-call.png"
import iconEmail from "./assets/email.png"
import iconLocation from "./assets/location-prof-card.png"
import iconEducation from "./assets/mortarboard.png"
import iconExp from "./assets/suitcase-prof-card.png"
import iconFees from "./assets/coin-prof-card.png"
import iconTime from "./assets/time.png"


function Proffessional(){

    const finder = new URLSearchParams(window.location.search);
    const id = finder.get("id");
    
    const [data,setData] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.post("http://localhost:3000/profinder",{
                    Id:id
                })
                setData(response.data)
            } catch (error) {
                console.log("ERROR FROM AXIOS IN REACT PAGE PROFFESSIONAL.JSX | THAT IS: ",error);
            }
        }
        fetchData();
    },[]);
    return(
    
        <>
        <style>
            {
                `
                .flex-card{
                    display:flex;
                    align-items:center;
                    justify-content:space-evenly;
                    padding:3vw;
                    flex-wrap:wrap;
                }
                .flex-card img{
                    height:4vh;
                    
                }
                .flex-card small{
                    color:silver;
                }
                header img{
                    height:35vh;
                    margin-bottom:3vh;
                    border : 1px solid silver;
                    padding:0.2vw;
                    border-radius: 50%;
                }
                #btn{
                    background-color:#A2CFFE;
                    color:white;
                    width:100%;
                    height:10vh;
                    postion:fixed;
                    bottom:0;
                    border:none;
                    font-weight:bold;
                }
                `
            }
        </style>
                {data && data.map(ele => (
                    <div className="prof-card">
                        <header> 
                        <center>
                        <img src={docImg} alt="" />
                        <h3 key={ele._id}>{ele.name}</h3>
                        </center>
                        </header>
                       
                        <div className="flex-card">
                        <div className="flex-card"><img src={iconEmail} alt="" /><small>{ele.email}</small></div>
                        <div className="flex-card"><img src={iconPhone} alt="" /> <small>{ele.phoneNo}</small></div>
                        <div className="flex-card"><img src={iconLocation} alt="" /> <small>{ele.location},{ele.city}</small></div>
                        <div className="flex-card"><img src={iconFees} alt="" />   <small>{ele.fees}</small></div>
                        <div className="flex-card"><img src={iconEducation} alt="" /> <small>{ele.qualification}</small></div>
                        <div className="flex-card"><img src={iconExp} alt="" /> <small>{ele.workExp}</small></div>
                        <div className="flex-card"><img src={iconTime} alt="" /> <small>{ele.from}-{ele.to}</small></div>
                        </div>
                        
                        <form action="/appointment" method="get">
                            <input type="hidden" name="id" value={ele._id} />
                            <input type="hidden" name="from" value={ele.from} />
                            <input type="hidden" name="to" value={ele.to} />
                            <input type="hidden" name="pertime" value={ele.pertime} />
                           <center><input type="submit" id="btn" value="Book An Appointment" /></center> 
                        </form>
                       
                       
                      
                       
                        
                    </div> 
            ))}

        
        </>
    )
}


export default Proffessional