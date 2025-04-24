import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./features/apis/fetchPosts";

const FetchPost = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  console.log(user, "user");
  const { item, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>loading..</p>}
      {item.posts?.map((val, idx) => (
        <div key={idx}>
          <span>{val.id}</span> <span>{val.title}</span>
        </div>
      ))}
    </div>
  );
};

export default FetchPost;
