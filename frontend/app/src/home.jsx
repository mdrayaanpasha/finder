
import {React, useState} from "react";
function Home(){
    const [findprofession,setfindProffesion]=useState(null)
    const [giveProffession,setgiveProffesion]=useState(null)
    return(
        <>
        
        <style>
            {

                `
                .take, .provide{
                    display:flex;
                }
                .card{
                    height:20vw;
                    width:20vw;
                    background-color:lightgreen;
                    color:white;
                    margin-left:3vw;
                    padding:2vw;
                }
                .card h4{
                    margin-top:5vh;
                }
                `

            }
        </style>
        <h2>Hello, Welcome!</h2>
        <h3>What are you looking for?</h3>
        <form action="/doc-name" method="get">
            <input type="text" name="Doc" />
            <input type="submit" value="" />
        </form>
        <h4>Find a:</h4>
        <div className="take">
            <div className="card" onClick={()=>{
                setfindProffesion("doctor");
                window.location.href="/doctors"
            }}>
               <center><h4>Doctor</h4></center> 
            </div>
            <div className="card" onClick={()=>{
                setfindProffesion("teacher")
                window.location.href="/teachers"
            }}>
            <center><h4>Teacher</h4></center> 
            </div>
            <div className="card" onClick={()=>{
                setfindProffesion("lawyer")
                window.location.href="/lawyers"
            }}>
            <center><h4>Lawyer</h4></center> 
            </div>
        </div>
        <h4>Provide service as a: </h4>
        <div className="provide">
        <div className="card" onClick={()=>setgiveProffesion("doctor")}>
        <center><h4>Doctor</h4></center> 
            </div>
            <div className="card" onClick={()=>setgiveProffesion("teacher")}>
            <center><h4>Teacher</h4></center> 
            </div>
            <div className="card" onClick={()=>setgiveProffesion("lawyer")}>
            <center><h4>Lawyer</h4></center> 
            </div>
        </div>
        
        </>
    )
}


export default Home;