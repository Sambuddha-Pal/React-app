import { useRef } from "react";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";
const CreatePost = () => {
  const postTitleElement = useRef();
  const PostContentElement = useRef();
  const likeElement = useRef();
  const dislikeElement = useRef();
  const HashTagElement = useRef();
  const UserIDElement = useRef();

  const { addPost } = useContext(PostList);

  const handleOnClick = (event) => {
    event.preventDefault();
    const userId = UserIDElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postContent = PostContentElement.current.value;
    const Reactions = {
      likes: likeElement.current.value,
      dislikes: dislikeElement.current.value,
    };
    const HashTag = HashTagElement.current.value.split("#");

    postTitleElement.current.value = "";
    PostContentElement.current.value = "";
    likeElement.current.value = "";
    dislikeElement.current.value = "";
    HashTagElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: postTitle,
        body: postContent,
        reactions: Reactions,
        tags: HashTag,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        addPost(res);
      });
  };
  return (
    <form className="create-post" onSubmit={handleOnClick}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="Enter User ID"
          ref={UserIDElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="Enter Post Title"
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="content"
          rows="5"
          placeholder="Tell more about.."
          ref={PostContentElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <textarea
          type="text"
          className=" like"
          id="content"
          rows="1"
          placeholder="Likes"
          ref={likeElement}
        />
        <textarea
          type="text"
          className=" like"
          id="content"
          rows="1"
          placeholder="DisLikes"
          ref={dislikeElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          HashTags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          aria-describedby="emailHelp"
          placeholder="Enter hashTags#"
          ref={HashTagElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
