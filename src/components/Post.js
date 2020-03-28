import React, { useState, useEffect } from "react";
import {PageHeader, Card} from "antd";
import api from "../article_title_api";

/*const content = `What is Lorem Ipsum?

                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                
                Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,
                
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                
                It has survived not only five centuries, but also the leap into electronic typesetting,
                
                remaining essentially unchanged.
                
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`*/
const Post = (props) =>{
    const [ title, setTitle] =useState('');
    const [ content, setContent] =useState('');
    useEffect( () =>{
        let post = api[props.id];
        setTitle(post.title);
        setContent(post.content)
    },[]);
    return (
        <div className="post_container">

            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title={title}
                />
            </div>
            <div className="post_content_container">
                <Card style={{marginTop: "20px"}}
                >
                    {
                        props.content.split('\n').map((paragraph, idx ) =>{
                            return <p key={idx}>{paragraph}</p>
                        })
                    }
                </Card>
            </div>
        </div>
    );
};

export default Post;