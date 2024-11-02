// import { useContext, useState } from "react"

// import { useNavigate } from "react-router-dom"

// import MyContext from "../../Context/MyContext"

// import "./index.css"

// function LoginForm(){

//     const [userValue, setUserValue] = useState("");

//     const [userPassword, setUserPassword] = useState("");

//     const {setUsername} = useContext(MyContext);

//     const navigation = useNavigate();

//     const onchangeUserValue = e => {
//         setUserValue(e.target.value);
//     }

//     const onchangePasswordValue = e => {
//         setUserPassword(e.target.value);
//     }
    

//     const GotoDashBoard = () => {
//         if ((userValue.length === 0 || userValue === " ") && (userPassword.length === 0)){
//             alert("Please Enter Valid UserName And Password");
//             setUserValue("");
//         }else{
//             setUsername(userValue);
//             navigation("/dashboard");
//         }
//     }

//     return(
//         <div className="Login_bg_container">
//             <div className="Login_form">
//                 <h1 className="Login_heading">Login...</h1>
//                 <label className="Login_user_label" htmlFor="USERNAME">USERNAME</label>
//                 <input className="Login_user_search" type="text" id="USERNAME" placeholder="Enter Your Name..." value={userValue} onChange={onchangeUserValue}/>
//                 <label className="Login_user_label" htmlFor="PASSWORD">PASSWORD</label>
//                 <input className="Login_user_search" type="password" id="PASSWORD" placeholder="Enter Your Password..." value={userPassword} onChange={onchangePasswordValue}/>
//                 <button type="button" className="submit_btn" onClick={GotoDashBoard}>Login</button>
//             </div>
//         </div>
//     )
// }

// export default LoginForm

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../../Context/MyContext";
import "./index.css";

function LoginForm() {
    const [userValue, setUserValue] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const { setUsername } = useContext(MyContext);
    const navigation = useNavigate();

    const onchangeUserValue = (e) => {
        setUserValue(e.target.value);
    };

    const onchangePasswordValue = (e) => {
        setUserPassword(e.target.value);
    };

    const GotoDashBoard = () => {
        if (userValue.trim() === "") {
            alert("Please enter a valid username.");
            setUserValue("");
        } else if (userPassword.trim() === "") {
            alert("Please enter a valid password.");
            setUserPassword("");
        } else {
            setUsername(userValue); 
            navigation("/dashboard");
        }
    };

    return (
        <div className="Login_bg_container">
            <div className="Login_form">
                <h1 className="Login_heading">Login...</h1>
                <label className="Login_user_label" htmlFor="USERNAME">USERNAME</label>
                <input
                    className="Login_user_search"
                    type="text"
                    id="USERNAME"
                    placeholder="Enter Your Name..."
                    value={userValue}
                    onChange={onchangeUserValue}
                />
                <label className="Login_user_label" htmlFor="PASSWORD">PASSWORD</label>
                <input
                    className="Login_user_search"
                    type="password"
                    id="PASSWORD"
                    placeholder="Enter Your Password..."
                    value={userPassword}
                    onChange={onchangePasswordValue}
                />
                <button type="button" className="submit_btn" onClick={GotoDashBoard}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default LoginForm;