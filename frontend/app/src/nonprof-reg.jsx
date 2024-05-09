import axios from "axios"
import { useState } from "react"
function NonReg(){
    const [message,setMessage] = useState(null);

    const Handle = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3000/nonreg",{
                name: e.target.name.value,
                email:e.target.email.value,
                password:e.target.password.value
            })
            if(response.data.message==="exist"){
                setMessage("This Email Exists Try To Login!")
                setTimeout(() => {
                    setMessage(null)
                }, 3000);
            }else if(response.data.message==="error"){
                setMessage("there is an internal Error ")
                setTimeout(() => {
                    setMessage(null)
                }, 3000);
            }else {
                localStorage.setItem("type","non-profession");
                localStorage.setItem("email",e.target.email.value);
                window.location.href="/";
            }
            
        } catch (error) {
            setMessage("there is an internal error")
            setTimeout(() => {
                setMessage(null)
            }, 3000);
        }
    }
    return(
        <form onSubmit={Handle}>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Enter Your Name</label>
                <input type="text" className="form-control" name='name' required/>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Enter Email</label>
                <input type="email" className="form-control" name='email' required/>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Enter Password</label>
                <input type="password" className="form-control" name='password' required/>
            </div>
            
            <input type="submit" value="Register" />
        </form>
    )
}


export default NonReg