import React, {useState} from 'react';
import './App.css';
import Post from './components/Post';
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import SignUp from "./components/SignUp";
import { Router, Link } from '@reach/router'
import { Menu } from "antd";
import { ReadOutlined, FormOutlined, LogoutOutlined } from '@ant-design/icons';
import SignIn from "./components/SignIn";
import { auth } from "./firebase";

function App() {

    const [ User , setUser] = useState(false);


    auth.onAuthStateChanged(function (User) {
        if (User){
            console.log(User);
            setUser(User);

        } else{

            console.log(" No User sign in ");

        }

    });
    const OnSingOut = () =>{
        auth.signOut()
            .then(function() {
            // Sign-out successful.
                console.log('Bye');
                setUser(false)
        }).catch(function(error) {
            // An error happened.
            console.log("Error en el OnSingOut");
        });

    };


  return (
    <div className="app_container">
        <div className="app_main_navigation">
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <ReadOutlined />
                    <Link to="/posts"> Posts   </Link>
                </Menu.Item>
               { User &&
                    <Menu.Item key="create_post" >
                        <FormOutlined />
                        <Link to="/create_post"> Create Post </Link>
                    </Menu.Item>}
                {
                    !User
                    ?
                    <Menu.Item key="sing_out" style={{ float:"right" }}  >
                        <LogoutOutlined />
                        <Link to="/sign_in"> Sign In</Link>
                    </Menu.Item>
                    :
                    <Menu.Item key="sing_out" style={{ float:"right" }}  >
                        <LogoutOutlined />
                        <a onClick={OnSingOut}> Sign Out </a>
                    </Menu.Item>
                }

            </Menu>
        </div>
        <Router>
            <SignUp path="sign_up" />
            <SignIn path="sign_in" default />
            <Posts path="posts" user={ User } />
            <Post path="post/:id" />
            <CreatePost path="create_post" />
            <UpdatePost path="update_post/:id" />
        </Router>
    </div>
  );
}

export default App;
