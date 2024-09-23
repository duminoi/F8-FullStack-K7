# redux:

quản lý chung một store
store chung hay tất cả các component đều có thể gọi đến được.

- Kiến trúc redux:

* action: (mang theo thông tin - (type, payload))
  +store:
  - state: các biến được lưu trữ và quản lý bởi store
  - reducer: cập nhật lại state

redux core:

- Khi cập nhạt state: phải cập nhật cả state
  exp: state = {count: 1, number: 1}

toolkit

- sửa dự án sang toolkit

redux-thunk (di kem voi toolkit)

## Ôn tập kiến thức cũ:

1 số cách chống re-render không cần thiết:

- useRef
- useMemo
- memo
- useCallback
