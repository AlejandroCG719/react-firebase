import React, {useState} from "react";
import {Button, Input, PageHeader} from "antd";
import {auth} from "../firebase";


const SignIn = (props) => {
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');

    const onEmailChange = (e)=> setEmail(e.target.value);
    const onPasswordChange = (e)=> setPassword(e.target.value);

    const onSingUp = () =>{
        console.log(email , password)
        auth.signInWithEmailAndPassword(email, password)
            .then(function (result){
                console.log('Use signed in')
            }).catch(function(error) {
                console.log("Sign in ERROR" + error);
        });
        setEmail('');
        setPassword('');
    };
    return(
        <div className="sign_up_container">
            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Sign In"
                />
            </div>
            <div className="sign_up_container_inputs">

                <div className="post_input_container">
                    <div className="post_input_title">
                        <h2> Email </h2>
                    </div>
                    <div className="post_input">
                        <Input placeholder="Email" onChange={onEmailChange}/>

                    </div>
                </div>
                <div className="post_input_container">
                    <div className="post_input_title">
                        <h2> Passwrod </h2>
                    </div>
                    <div className="post_input">
                        <Input.Password placeholder="Password" onChange={onPasswordChange}/>

                    </div>
                </div>
                <div style={{ width:"100%" }}>
                    <a href="#"> Don't have an account, Sign In</a>
                </div>
                <div className="post_input_button">
                    <Button type="primary" onClick={onSingUp}>
                        Sign In
                    </Button>
                </div>

            </div>
        </div>
    );
};
export default SignIn;
