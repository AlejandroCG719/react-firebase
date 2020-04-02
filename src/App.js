import React, {useState} from 'react';
import './App.css';
import Post from './components/Post';
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import SignUp from "./components/SignUp";
import { Router, Link } from '@reach/router'

import SignIn from "./components/SignIn";
import { auth } from "./firebase";
import AppNav from "./components/AppNav";

function App(props) {

    const [ User , setUser] = useState(false);


    auth.onAuthStateChanged(function (User) {
        if (User){
            //console.log(User);
            setUser(User);
        } else{
            console.log(" No User sign in ");
        }
    });

  return (
    <div className="app_container">
        <AppNav user={User}/>
        <Router>
            <SignUp path="sign_up" />
            <SignIn path="sign_in" default />
            <Posts path="blogs/:uid/posts" user={ User } />
            <Post path="blogs/:uid/post/:id" user={ User }/>
            <CreatePost path="create_post" user={ User } />
            <UpdatePost path="update_post/:id" user={ User } />
        </Router>
    </div>
  );
}

export default App;
