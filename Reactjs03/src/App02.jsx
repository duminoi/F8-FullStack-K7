import { useEffect } from "react";
import { useDispatch, useSelector } from "./store/hook";
import { fetchPosts } from "./store/middlewares/fetchPosts";

export default function App() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => {
    return state.postList;
  });
  console.log(postList);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {postList.map(({ title, id }) => {
        return <h3 key={id}>{title}</h3>;
      })}
    </div>
  );
}
