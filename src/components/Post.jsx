import { RiChatDeleteFill } from "react-icons/ri";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";
const Post = ({ post1 }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post" style={{ width: "70rem" }}>
      <div className="card-body">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete"
          onClick={() => {
            deletePost(post1.id);
          }}
        >
          <RiChatDeleteFill />
        </span>
        <h5 className="card-title">{post1.title}</h5>
        <p className="card-text">{post1.body}</p>
        {post1.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashTag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          Likes {post1.reactions.likes} DisLikes {post1.reactions.dislikes}
        </div>
      </div>
    </div>
  );
};
export default Post;
