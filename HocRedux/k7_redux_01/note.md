redux thunk
thunk: là 1 phần của code, có thể thực hiện delay một số công việc
-> có thể async/await, Promise ở thunk
thunk sẽ mang theo dispatch, getState
thunk có thể thực hiện logic đồng bộ và bất đồng bộ
sẽ thường được sử dụng khi cần thao tác với API

(_)
Khi click nút add subject
dispatch addSubject và lưu vào store
(_)
mình cần thêm newSubject vào BE(json server)
vd: subject/ post
body {
name:"test", priority: "low"
}

-->{
"id": 5, name:"test", priority:"low"
}
-> Lưu vào store

subject init = []
khi web được khởi tạo, subjects phải được lấy từ api về
khi click -> lưu vào db.json
hiển thị new subject lên giao diện
