import axios  from "axios";

function NonLog(){

    const handle = async  (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/nonproglog",{
                email:e.target.email.value,
                password:e.target.password.value,
            })
            if(response.data.message==="fail"){
                setMessage("Wrong Password!")
                setTimeout(() => {
                    setMessage(null)
                }, 3000);
            }else if(response.data.message==="!exist"){
                setMessage("Email doesnt Exist!")
                setTimeout(() => {
                    setMessage(null)
                }, 3000);
            }else if(response.data.message==="error"){
                setMessage("There is an internal server error!")
                setTimeout(() => {
                    setMessage(null)
                }, 3000);
            }else{
                localStorage.setItem("type","non-profession");
                localStorage.setItem("email",e.target.email.value);
                window.location.href="/";
            }
        } catch (error) {
            setMessage("There is an internal server error!")
            setTimeout(() => {
                setMessage(null)
            }, 3000);
        }
    }

    return(
        <form onSubmit={handle}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Enter Email</label>
                <input type="email" className="form-control" name='email' required/>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Enter Password</label>
                <input type="password" className="form-control" name='password' required/>
            </div>
            
            <input type="submit" value="Login" />
        </form>
    )
}

export default NonLog