import React, {useState} from "react";
import {Menu} from "antd";
import {Link} from "@reach/router";
import { ReadOutlined, FormOutlined, CloseCircleTwoTone,LogoutOutlined } from '@ant-design/icons';
import {auth} from "../firebase";

const AppNav =(props) =>{
    const OnSingOut = () =>{
        auth.signOut()
            .then(function() {
                // Sign-out successful.
                console.log('Bye');
                //setUser(false)
            }).catch(function(error) {
            // An error happened.
            console.log("Error en el OnSingOut");
        });

    };
    return (
        <div className="app_main_navigation">
            <Menu mode="horizontal">
                {
                    props.user &&
                    <Menu.Item key="mail">
                        <ReadOutlined />
                        <Link to={`/blogs/${props.user.uid}/posts`}> Posts   </Link>
                    </Menu.Item>
                }
                { props.user &&
                <Menu.Item key="create_post" >
                    <FormOutlined />
                    <Link to="/create_post"> Create Post </Link>
                </Menu.Item>}
                {
                    !props.user
                        ?
                        <Menu.Item key="sing_out" style={{ float:"right" }}  >
                            <LogoutOutlined />
                            <Link to="/sign_in"> Sign In</Link>
                        </Menu.Item>
                        :
                        <Menu.Item key="sing_out" style={{ float:"right" }}  >
                            <CloseCircleTwoTone />
                            <a onClick={OnSingOut}> Sign Out </a>
                        </Menu.Item>
                }
            </Menu>
        </div>
        )
};

export default AppNav;