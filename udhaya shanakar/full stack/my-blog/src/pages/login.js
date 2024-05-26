import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth" 



const LoginPage = () => {
    
    const [Email,setEmail] = useState("");
    const [Password,Setpassword] = useState("");
    const [Error,SetError] = useState("");
    const navigate  = useNavigate();

    const login = async (e)=> {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(getAuth(),Email,Password);
            navigate("/articles")
            alert("login successfully")
            console.log("login successfully")
        }
        catch(e){
            SetError(e.message)
        } 
    }

    const passwordToString = ()=>{
            const passwordInput = document.getElementById('password');
            const icon = document.getElementById('pwdtostr');
            
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                icon.classList.remove("bi-eye-fill"); // Remove the class for the eye icon
                icon.classList.add("bi-eye-slash-fill"); // Add the class for the slashed eye icon
            } else {
                passwordInput.type = "password";
                icon.classList.remove("bi-eye-slash-fill"); // Remove the class for the slashed eye icon
                icon.classList.add("bi-eye-fill"); // Add the class for the eye icon
            }
        };
    
    return (
        <div class="login-page container">
            <div  class="group">
            <h1 class="header">Login id</h1>
            <form  class="sub-group">
            {Error && <p class="error bg-danger text-white">{Error}</p>}

                <div class="form-floating">
                    <input
                        class="form-control"
                        type="email"
                        placeholder="your email" 
                        value={Email} 
                        onChange={e => setEmail(e.target.value)}
                        id="email"
                        required
                        />
                    <label htmlFor="email" class="form-label">Email id</label>
                </div>

                <div class="form-floating">
                    <input
                        class="form-control"
                        type="password"
                        placeholder="password" 
                        value={Password} 
                        onChange={e => Setpassword(e.target.value)}
                        id="password"
                        required
                        />
                    <label htmlFor="password" class="form-label">Your Password</label>
                    <span class="position-absolute d-inline" style={{top:"15px",left:"325px",border:"none",background:"transparent",zIndex:"1000"}} onClick={()=>passwordToString()} ><i class="bi bi-eye-fill" id="pwdtostr"></i></span>
                </div>

            <button onClick={login} class="btn btn-outline-primary">Login in</button>

            <h5><Link to="/createAccount" style={{textDecoration:"none"}}>Don't have an account? Create one here</Link></h5>
            </form>
        </div>
        </div>
    )
};

export default LoginPage;