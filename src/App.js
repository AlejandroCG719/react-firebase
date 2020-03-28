import React from 'react';
import './App.css';
import Post from './components/Post';
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import { Router } from '@reach/router'

function App() {
  return (
    <div className="app_container">
        <Router>
            <CreatePost default />
            <Posts path="posts"/>
            <Post path="post/:id"/>
        </Router>
    </div>
  );
}

export default App;
