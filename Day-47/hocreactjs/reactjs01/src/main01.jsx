import ReactDom from "react-dom/client";
import React from "react";
const root = document.querySelector("#root");
/*
  Bài tập:
  Tạo cặp thẻ html sau và đặt trước thẻ h2
  <ul>
      <li>Học ReactJS - 01</li>
      <li>Học ReactJS - 02</li>
      <li>Học ReactJS - 03</li>
      <li>Học ReactJS - 04</li>
      ....
      <li>Học ReactJS - 100</li>
  </ul>
  Lưu ý: Có 100 thẻ li
*/

// Tạo React Element
// const h1 = React.createElement(
//   "h1",
//   {
//     className: "title",
//     id: "title",
//   },
//   "Học reactJs không khó"
// );

// const h2 = React.createElement(
//   "h2",
//   {
//     className: "sub-title",
//   },
//   "Học react rất khó",
//   React.createElement(
//     "a",
//     {
//       href: "https://fullstack.edu.vn",
//       target: "_blank",
//       style: {
//         color: "red",
//         backgroundColor: "yellow",
//       },
//     },
//     "Fullstack - F8"
//   )
// );
// let count = 0;
// const liList = [];
// const createUlLi = () => {
//   while (count < 100) {
//     count++;
//     liList.push(React.createElement("li", null, `Học ReactJS - ${count}`));
//     console.log(count);
//   }
//   return liList;
// };
// const ul = React.createElement("ul", null, ...createUlLi()); //... là để giải nén

// const element = React.createElement(React.Fragment, null, h1, ul, h2);
// // Render
// ReactDom.createRoot(root).render(element);
const title = " Đức Minh F8";
const subTitle = <h3>ok chưa?</h3>;
const users = ["User 1", "User 2", "User 3"];
const usersJsx = users.map((user, index) => {
  return <li key={index}>{user}</li>;
});
const getProduct = () => {
  return <h2>Sản phẩm 1</h2>;
};
const Product = () => {
  return <h2>Sản phẩm 2</h2>;
};
class User extends React.Component {
  render() {
    return <h2>Ok chưa?</h2>;
  }
}
const element = (
  <div>
    <h1 className="title" id="title">
      Học ReactJS
    </h1>
    <h2>Học React không khó</h2>
    {getProduct()}
    <Product />
    <Product></Product>
    <h2>{title}</h2>
    {subTitle}
    <ul>{usersJsx}</ul>
    <User />
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
      <li>item 5</li>
    </ul>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio iure itaque
      architecto beatae suscipit delectus molestiae praesentium mollitia est.
      Minus blanditiis ducimus soluta? Assumenda, in! Doloremque doloribus quam
      velit alias veniam iste! Beatae, facere mollitia commodi nulla aperiam in.
      Doloribus!
    </p>
  </div>
);
console.log(element);

//JSX (Javascript XML) ==> Javascript Compiler (SWC, Babel) ==> React Element ==> HTML
ReactDom.createRoot(root).render(element);
