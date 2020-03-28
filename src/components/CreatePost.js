import React, { useState } from "react";
import { PageHeader , Input, Button } from "antd";
const { TextArea } = Input;
import db from "../firebase";


const CreatePost = (props)=>{

    const [title, setTitle]= useState('');
    const [content, setContent]= useState('');
    const onTitleChange = (e)=> setTitle(e.target.value);
    const onContentChange = (e)=> setContent(e.target.value);
    const onCreatePost = () =>{
         db
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
                    <Button type="primary" onClick={onCreatePost}>
                        Create Post
                    </Button>
                </div>

            </div>
        </div>
    )
}
export default CreatePost;