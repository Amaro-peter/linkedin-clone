import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import LinkedinLogo from "../assets/Mission.png";
import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom";
import '../Sass/LoginComponent.scss';
import { toast } from "react-toastify";

export default function LoginComponent() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const login = async () => {
        try{
            let res = await LoginAPI(credentials.email, credentials.password);
            toast.success("Signed In to Linkedin!");
            navigate("/home");
        } catch(err) {
            toast.error("Please Check your Credentials.");
            toast.error("If it is your first time in the platform, Click Join now !");
        }
    };

    const googleSignIn = () => {
        let response = GoogleSignInAPI();
        console.log(response);
        navigate("/home");
    };
    return( 
    <div className = "login-wrapper">
        <img src ={LinkedinLogo} className="linkedinLogo"/>
        <div className="login-wrapper-inner">
        <h1 className="heading">Sou um missionário</h1>
        <div className="auth-inputs">
            <input
                onChange={(event) =>
                    setCredentials({ ...credentials, email: event.target.value})
                }
                type="email"
                className = "common-input"
                placeholder = "Email or Phone"
            />
            <input 
                onChange= {(event) =>
                    setCredentials({...credentials, password: event.target.value})
                }
                type="password"
                className="common-input"
                placeholder= "Password"
            />
        </div>
        <button onClick={login} className="login-btn">
            Sign in
        </button>
        </div>
        <hr className="hr-text" data-content="or"/>
        <div className="google-btn-container">
            <GoogleButton
                className="google-btn"
                onClick={googleSignIn}
            />
            <p className="go-to-signup">
                New to Linkedin?{" "}
                <span className="join-now" onClick={() => navigate('/register')}>
                    Join now
                </span>
            </p>
        </div>
    </div>
    );
}