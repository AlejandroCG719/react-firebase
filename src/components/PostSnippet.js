import React from "react";
import { Card } from "antd";
import { Link } from '@reach/router'
import db from '../firebase'

const PostSnippet = (props) =>{

    const onDeletePost = () => {
        console.log("Delete Post Id");
        let postRef = db
            .collection('users')
            .doc(props.user.uid)
            .collection("posts")
            .doc(props.id);

            postRef.delete()
    };

    return (
      <div className="post_snippet_container">
          <Card style={{ marginTop:16 }}
                type="inner"
                title={props.title}
                extra={
                    <div className="post_snippets_link">
                        <Link  to={`/post/${props.id}`}>
                            Read Full Article
                        </Link>
                        { props.user &&
                            <div className="post_edit_links">
                                <Link to={`/update_post/${props.id}`}>
                                    Edit
                                </Link>
                                <a  className="post_edit_links"
                                    onClick={onDeletePost}
                                >
                                    Delete
                                </a>
                            </div>
                        }
                    </div>
                }>
              <p className="article_container">
                  {
                      props.content.split('\n').map((paragraph, idx ) =>{
                          return <p key={idx}>{paragraph}</p>
                      })

                  }
              </p>
          </Card>

      </div>
    );
};
export default PostSnippet