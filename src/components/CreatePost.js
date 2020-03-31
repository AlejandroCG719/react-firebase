import React, { useState } from "react";
import db from "../firebase";
import { PageHeader , Input, Button } from "antd";
import { navigate } from "@reach/router";
const { TextArea } = Input;


const CreatePost = (props)=>{

    const [title, setTitle]= useState('');
    const [content, setContent]= useState('');
    const onTitleChange = (e)=> setTitle(e.target.value);
    const onContentChange = (e)=> setContent(e.target.value);
    const onEditPost = () =>{
        let postRef = db.collection('posts');

        let payload = { title,content };

        postRef.add(payload)
            .then(function (doc) {
                console.log("Document succesfully writtem!", doc.id);
            });
        setTitle('');
        setContent('');
        navigate( `/posts`)
    };

    return (
        <div>
            <div className="create_post_container">
                <PageHeader
                    className="site-page-header"
                    title="Create Post"
                />
            </div>
            <div className="post_inputs_container">
                <div className="post_input_container">
                    <div className="post_input_title">
                       <h2> Post Title</h2>
                    </div>
                    <div className="post_input">
                        <Input placeholder="Post Title" value={ title } onChange={ onTitleChange }/>

                    </div>
                </div>
                <div className="post_input_container">
                    <div className="post_input_title">
                        <h2> Post Conten</h2>
                    </div>
                    <div className="post_input">
                        <TextArea rows={ 10 } value={ content } onChange={ onContentChange }/>
                    </div>
                </div>
                <div className="post_input_button">
                    <Button type="primary" onClick={onEditPost}>
                        Update Post
                    </Button>
                </div>

            </div>
        </div>
    )
}
export default CreatePost;