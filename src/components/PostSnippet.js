import React from "react";
import { Card } from "antd";
import { Link } from '@reach/router'

const PostSnippet = (props) =>{
    return (
      <div className="post_snippet_container">
          <Card style={{ marginTop:16 }}
                type="inner"
                title={props.title}
                extra={
                    <div class="post_snippets_link">
                        <Link to={`/post/${props.id}`} style={{ marginRight: '15px'} } >
                            Read Full Article
                        </Link>
                        <Link to={`/update_post/${props.id}`}>
                            Edit
                        </Link>
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