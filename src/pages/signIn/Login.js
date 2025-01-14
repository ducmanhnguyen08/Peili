import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import CustomChatbot from "../chatbot/CustomChatbot";

import "./Login.css";

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginErrorMsg, setLoginErrorMsg] = useState("");
    const [redirect, changeRedirect] = useState(false);
    const [redirectRegister, changeRedirectRegister] = useState(false);

    function onUsernameChange(username) {
        setUsername(username.target.value);
        console.log(username.target.value);
        setLoginErrorMsg("")
    }

    function validateForm() {
        if (username === "") {
            setLoginErrorMsg("Username can not be empty");
        }else {
            changeRedirect(true);
        }
    }

    function redirectRegistering(){
        changeRedirectRegister(true);
    }
    
    if(redirect){
        return <Redirect push to="/feed" />;
    }

    if(redirectRegister){
        return <Redirect push to="/register" />;
    }

    return (
        <div className="login_container">
            <div className="login_box">

                <div className="login_peiliLogoContainer">
                    <img className="login_peiliLogo" src="PeiliLogo.png" />
                </div>

                <div className="login_signInText">
                    Sign in
            </div>

                <hr className="login_line">
                </hr>

                <div className="login_inputContainers">
                    <input
                        className="login_inputs"
                        type="text"
                        name="username"
                        placeholder="Username"
                        maxLength={20}
                        onChange={onUsernameChange}
                    />
                </div>

                <div className="login_inputContainers">
                    <input
                        className="login_inputs"
                        type="password"
                        name="password"
                        placeholder="Password" />
                </div>

                <div className="login_errorMsg">
                    <small>{loginErrorMsg}</small>
                </div>

                <div className="login_btnContainer">
                    <button
                        type="button"
                        className="login_btn"
                        onClick={() => validateForm()}>
                        Login
                </button>
                </div>

                <div className="login_noAccount">
                    <button
                        type="button"
                        className="login_noAccountBtn"
                        onClick={() => redirectRegistering()}
                    >
                        Not registered?
                </button>
                </div>
           <CustomChatbot />

            </div>
        </div>

    );
}