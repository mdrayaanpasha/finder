import axios from 'axios'
import React, { useState } from "react";
import "./com.css"

function Reg() {
    const [profession, setProfession] = useState(null);
    const [message,setMessage] = useState(null)
    const teachArr = ["math","english","Science(phys,chem,bio)","hindi"];
    const lawArr = ["tax-law","Intellectual-Property-law","criminal-law","cooperate-law"];
    const docArr = ["general","ENT","dentist"];
    const [cat,setCat] = useState(null);
    
    const handle = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:3000/reg-prof", {
                name: e.target.name.value,
                email: e.target.email.value,
                phoneNo: e.target.phoneNo.value,
                password: e.target.password.value,
                city: e.target.city.value,
                location: e.target.location.value,
                fees: e.target.fees.value,
                from: e.target.from.value,
                to: e.target.to.value,
                profession: profession,
                qualification: e.target.qualification.value,
                workExp: e.target["work-exp"].value,
                category:e.target.category.value,
                pertime:e.target.Pertime.value
            });

            if(response.data.message==="hain"){
                setMessage("Email Exist Already!")
                setTimeout(() => {
                    setMessage(null)
                }, 3000);
            }else if(response.data.message === "error"){
                setMessage("There is an Internal Server Error!")
                setTimeout(() => {
                    setMessage(null)
                }, 3000);
            }else if(response.data.message==="banga"){
                localStorage.setItem("type","profession");
                localStorage.setItem("email",e.target.email.value);
                window.location.href="/";
            }
        } catch (error) {
            setMessage("There is an internal problem!")
                setTimeout(() => {
                    setMessage(null)
                }, 3000);
        }
    };

    const handleProfessionSelection = (selectedProfession) => {
        setProfession(selectedProfession);
        switch (selectedProfession) {
            case "doctor":
                setCat(docArr);
                break;
            case "teacher":
                setCat(teachArr);
                break;
            case "lawyer":
                setCat(lawArr);
                break;
            default:
                setCat(null);
                break;
        }
    };
    
    return (
        <>
        <style>
            {
            `
            #sticky{
                position:fixed;
                top:0;
                width: 100%; /* Ensures it spans the full width of the viewport */
    z-index: 1000;
            }
            `
            }
        </style>
        <div className="proff">
        {profession === null && 
                <div>
                    <h1>What Do You Do? </h1>
                    <div className="professions">
                        <div className="card" onClick={() => handleProfessionSelection("doctor")}>
                            <center><h4>Doctor</h4></center> 
                        </div>
                        <div className="card" onClick={() => handleProfessionSelection("teacher")}>
                            <center><h4>Teacher</h4></center> 
                        </div>
                        <div className="card" onClick={() => handleProfessionSelection("lawyer")}>
                            <center><h4>Lawyer</h4></center> 
                        </div>
                    </div>
                </div>
}

            {profession !==null && 
            <div>
                
        

                <form onSubmit={(e)=>{handle(e)}}>
                    {message && <div className="alert alert-danger" id="sticky" role="alert">
                    {message}
                    </div> }
                
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter Name</label>
                    <input type="text" className="form-control" name='name' required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter Email</label>
                    <input type="email" className="form-control" name='email' required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Enter a Password for you!</label>
                    <input type="password" className="form-control" name='password' required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="phoneNo" className="form-label">Enter PhoneNo</label>
                    <input type="text" className="form-control" name='phoneNo' required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="city" className="form-label">Enter City</label>
                    <input type="text" className="form-control" name='city' required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Enter Location</label>
                    <input type="text" className="form-control" name='location' required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="fees" className="form-label">Whats Your Fees ? </label>
                    <input type="number" className="form-control" name='fees' required/>
                </div>



                
                
                <div className="mb-3">
                            <label htmlFor="category" className="form-label">Select Category</label>
                            <select name="category" id="Category" className="form-select" required>
                                <option value="">Select a category</option>
                                {cat && cat.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>
                                ))}
                            </select>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="from" className="form-label">When Do You Start Working?</label>
                    <input type="time" className="form-control" name='from' required/>
                    <small><i>note: 24hrs format</i></small>
                </div>




                <div className="mb-3">
                    <label htmlFor="to" className="form-label">When Do You Stop Working?</label>
                    <input type="time" className="form-control" name='to' required/>
                    <small><i>note: 24hrs format</i></small>
                </div>

                <div className="form">
                    <label htmlFor="work-exp">Years Of Work Experience</label>
                    <input type="number" className="form-control" name='work-exp' required/>
                </div>

                <div className="form">
                    <label htmlFor="work-exp">Education</label>
                    <textarea className="form-control" placeholder="Leave a comment here" name="qualification" style={{ height: "100px" }}></textarea>
                </div>


                <div className="mb-3">
                    <label htmlFor="perTime" className="form-label">How many minutes do you take to consult per person?</label>
                    <input type="number" className="form-control" name='Pertime' required/>
                </div>

                <br /> 
                <center>
                    <input type="submit" value="Register" className="btn btn-primary btn-lg"/>   
                    <br /> 
                </center>
                </form>
            </div>
            }
        </div>
        </>
    );
    
}


export default Reg;
