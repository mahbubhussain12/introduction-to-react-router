import {  useLoaderData } from "react-router-dom";

const Post = () => {
    const post = useLoaderData();
    const postStyle = {
        border: "2px solid yellow",
        padding: "5px",
        borderRadius: "20px",
      };

    return (
        <div style={postStyle}>
            <h2>Posts:{post.length} </h2>
       <div className="users">
        {
            post.map(post => <Post key={post.id} post={post}></Post>)
        }
       </div>
        </div>
    );
};

export default Post;