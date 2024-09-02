import { useDispatch } from "../../store/hook";

export default function Profile() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: "auth/setLoading", payload: true });
    dispatch({ type: "auth/setUser", payload: [] });
    console.log("vào đây");
  };
  return (
    <div>
      <h1>Chào mừng bạn</h1>
      <button onClick={handleClick}>Đăng xuất</button>
    </div>
  );
}
