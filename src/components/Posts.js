import React, {useEffect, useState} from "react";
import { PageHeader} from 'antd';
import PostSnippet from "./PostSnippet";
import _ from "lodash";
import db from "../firebase"

function Posts(props) {
    const  [posts, setPosts]= useState([]);

    console.log(props);

    useEffect(() => {
        db.collection('users').doc(props.user.uid).collection('posts')
            .onSnapshot(async posts => {
                let postsData = await posts.docs.map( post => {
                    let data = post.data();
                    let { id } = post;
                    let payload = {
                        id,
                        ...data
                    };
                    return payload;
                });
                setPosts (postsData);
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
                            content={article.content.substring(1,10)}
                            user={props.user}
                        />
                    )
                    })
                   }
            </div>
        </div>
    )
}
export default Posts;