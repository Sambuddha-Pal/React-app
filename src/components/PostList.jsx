import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      {fetching && <Spinner></Spinner>}
      {!fetching && postList.length === 0 && <Welcome></Welcome>}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post1={post}></Post>)}
    </>
  );
};
export default PostList;
