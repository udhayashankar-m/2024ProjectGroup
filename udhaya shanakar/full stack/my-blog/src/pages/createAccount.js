import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"


const CreateAccount = () => {

    const [Email, setEmail] = useState("");
    const [Password, Setpassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");
    const [Error, SetError] = useState("");

    const navigate = useNavigate();

    const passwordToString1 = ()=>{
        const passwordInput1 = document.getElementById('password');
        if(passwordInput1.type === "password"){
            passwordInput1.type = "text"
        }
        else{
            passwordInput1.type = "password"
        }
    }
    
    const passwordToString2 = ()=>{
        const passwordInput2 = document.getElementById('confirm_password');
        if(passwordInput2.type === "password"){
            passwordInput2.type = "text"
        }
        else{
            passwordInput2.type = "password"
        }
    }

    const Newuser = async(e)=>{
        e.preventDefault();
        try {
            if (Password !== confirmPassword) {
                alert("password and confirm password do not match")
                return
            }
            await createUserWithEmailAndPassword(getAuth(), Email, Password);
            navigate("/articles")
            alert("successfully Created an account,you can login next time using same Email and Password")
            console.log("thanks to create an account")
        }
        catch (e) {
            SetError(e.message)
        }
    }

    return (
        <div class="Create_Account container">
            <div class="group">
                <h1 class="header header1">Create Account</h1>
                <form action="#" class="sub-group">
                    {Error && <p class="error bg-danger text-white fs-1">{Error}</p>}
                    <div class="form-floating position-relative">
                            <input
                                class="form-control"
                                type="email"
                                placeholder="your email"
                                value={Email}
                                onChange={e => setEmail(e.target.value)}
                                id="email"
                                name="email"
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
                            name="password"
                            id="password"
                        />
                        <span class="position-absolute" style={{top:"15px",left:"300px",border:"none",background:"transparent",zIndex:"1000"}} onClick={passwordToString1}><i class="bi bi-eye-fill"></i></span>
                        <label htmlFor="password" class="form-label">password</label>
                    </div>
                    <div class="form-floating">
                        <input
                            class="form-control"
                            type="password"
                            placeholder="confirm password"
                            value={confirmPassword}
                            onChange={e => SetConfirmPassword(e.target.value)}
                            id="confirm_password"
                            name="confirm_password"
                        />
                         <span class="position-absolute" style={{top:"15px",left:"300px",border:"none",background:"transparent",zIndex:"1000"}} onClick={passwordToString2}><i class="bi bi-eye-fill"></i></span>
                        <label htmlFor="confirm_password" class="form-label">confirm password</label>
                    </div>

                    <button onClick={Newuser} class="btn btn-outline-primary">Create Account</button>

                    <h5><Link to="/login" style={{ textDecoration: "none" }}>Already have an account? Login here</Link></h5>
                </form>
            </div>
        </div>
    )
};

export default CreateAccount;