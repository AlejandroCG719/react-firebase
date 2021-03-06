import React, { useEffect, useState } from "react";
import { PageHeader , Input, Button } from "antd";
import db from "../firebase";
import { navigate } from "@reach/router";

const { TextArea } = Input;

const UpdatePost = (props)=>{

    const [title, setTitle]= useState('');
    const [content, setContent]= useState('');

    useEffect( () =>{
        let  postRef = db
            .collection('users')
            .doc(props.user.uid)
            .collection('posts')
            .doc(props.id);

        postRef
            .get()
            .then( doc =>{
                let { content , title } = doc.data();
                setTitle(title);
                setContent(content);
            });
    },[] );

    const onTitleChange = (e)=> setTitle(e.target.value);
    const onContentChange = (e)=> setContent(e.target.value);

    const onUpdatePost = () =>{
        let postRef = db
            .collection('users')
            .doc(props.user.uid)
            .collection('posts')
            .doc(props.id);

        let payload = { title,content };

        postRef.update(payload)
            .then(function (doc) {
                console.log("Document succesfully updated...!");
            });

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
                    <Button type="primary" onClick={onUpdatePost}>
                       Update Post
                    </Button>
                </div>

            </div>
        </div>
    )
}
export default UpdatePost;