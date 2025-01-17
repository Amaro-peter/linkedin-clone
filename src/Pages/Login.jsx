import React, { useEffect, useState } from "react";
import LoginComponent from "../components/LoginComponent.jsx";
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig.js";
import Loader from "../components/common/Loader/index.jsx";


export default function Login() {
    /*const[loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect (() => {
        onAuthStateChanged(auth, (res) => {
            if(res?.accessToken) {
                navigate("/home");
            } else {
                setLoading(false);
            }
        })
    }, [])
    return loading ? <Loader /> : <LoginComponent />;*/
    return <LoginComponent />;
}