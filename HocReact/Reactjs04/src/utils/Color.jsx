const color = (Component) => {
  //Tạo ra 1 component mới
  return function MyComponent(props) {
    //Functional Component
    const getColor = () =>
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
    return (
      <div style={{ color: getColor() }}>
        <Component {...props} />
      </div>
    );
  };
};
export default color;
// Tạo ra 1 hàm bọc component và trả về chính component đó sau khi đã được thay đổi logic

/*
  - Tạo 1 hàm nhận vào một component ban đầu
  - Trong hàm đó sẽ tạo ra một component mới và trả về component ban đầu
*/
