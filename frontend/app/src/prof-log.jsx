import { useState } from "react"

import axios from "axios"

function ProfLog(){

    const [emailnot,setEmailnot] = useState(false);
    const [pass,setPass] = useState(false);
    const [message,setMessage] = useState(null)

    const handle  = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/prof-log",{
                email : e.target.email.value,
                password: e.target.password.value
            })
            if(response.data.message === "!exist"){
                setMessage("Email doesnt Exist!")
                setTimeout(() => {
                    setMessage(null)
                }, 3000);
            }else if(response.data.message === "fail"){
                setMessage("Wrong Password!")
                setTimeout(() => {
                    setMessage(null)
                }, 3000);
            }else if(response.data.message==="pass"){
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
    }

    return(
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
        <form onSubmit={handle}>
        {message && <div className="alert alert-danger" id="sticky" role="alert">
                    {message}
                    </div> }

        <div class="mb-3">
            <label for="email" class="form-label">Enter Email</label>
             <input type="email" class="form-control" name='email' required/>
        </div>

        <div class="mb-3">
        <label for="password" class="form-label">Enter Password</label>
        <input type="password" class="form-control" name='password' required/>
        </div>

        <input type="submit" value="Login!" />
        </form>
        
        </>
    )

}
export default ProfLog