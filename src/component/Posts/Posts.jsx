
const Posts = ({posts}) => {
    const {id,title} = posts;
    return (
        <div>
            <h4>Post of ID: {id}</h4>
            <p>{title}</p>
        </div>
    );
};

export default Posts;