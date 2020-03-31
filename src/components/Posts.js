import React, {useEffect, useState} from "react";
import { PageHeader} from 'antd';
import PostSnippet from "./PostSnippet";
import _ from "lodash";
import db from "../firebase"

function Posts(props) {

    const  [posts, setPosts]= useState([]);

    useEffect(() => {
        let postRef = db.collection('posts')
        postRef
            .get()
            .then(posts => {
                posts.forEach(post => {
                    let data = post.data();
                    let { id } = post;
                    //console.log('this is the post');
                    //console.log(data,id)


                    let payload = {
                        id,
                        ...data
                    }
                    setPosts ((posts) => [...posts, payload])
                })
            })
    },[]);

    return (
        <div className="posts_container">

            <div className="page_header_container">
                <PageHeader
                    className="site-page-header"
                    title="Posts"
                />
            </div>
            <div className="articles_container">
                { _.map(posts, (article,key ) =>{
                    return (
                        <PostSnippet
                            key={key}
                            id={article.id}
                            title={_.capitalize(article.title)}
                            content={article.content.substring(1,10)}/>
                    )
                    })
                   }
            </div>
        </div>
    )
}
export default Posts;