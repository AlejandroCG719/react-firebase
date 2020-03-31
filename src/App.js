import React from 'react';
import './App.css';
import Post from './components/Post';
import Posts from "./components/Posts";
import CreatePost from "./components/CreatePost";
import { Router, Link } from '@reach/router'
import { Menu } from "antd";
import { ReadOutlined, FormOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="app_container">
        <div className="app_main_navigation">
            <Menu mode="horizontal">
                <Menu.Item key="mail">
                    <ReadOutlined />
                    <Link to="/posts"> Posts   </Link>
                </Menu.Item>
                <Menu.Item key="app" >
                    <FormOutlined />
                    <Link to="/create_post"> Create Post </Link>
                </Menu.Item>
            </Menu>
        </div>
        <Router>
            <Posts path="posts" default/>
            <CreatePost path="create_post" />
            <Post path="post/:id"/>
        </Router>
    </div>
  );
}

export default App;
