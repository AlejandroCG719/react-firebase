import React, { useState, useEffect } from "react";
import {PageHeader, Card} from "antd";
import db from "../firebase";
const Post = (props) =>{

    const [ title, setTitle] = useState('');
    const [ content, setContent] = useState('');

    useEffect( () => {
        let  postRef = db
            .collection('users')
            .doc(props.uid)
            .collection('posts')
            .doc(props.id);

        postRef
            .get()
            .then( doc =>{
                let { content, title } = doc.data();
                setTitle(title);
                setContent(content);
            });

    },[]);
    return (
        <div className="post_container">

            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title={ title }
                />
            </div>
            <div className="post_content_container">
                <Card style={{marginTop: "20px"}}
                >
                    {
                        content
                    }
                </Card>
            </div>
        </div>
    );
};

export default Post;