/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import User from "./components/User";
import Avatar from "./components/Avatar";

export default function App() {
  //   const handleClick = (e) => {
  //     console.log(e.target.innerText);
  //   };
    const handleClick2 = (title) => {
      console.log(title);
    };
  //   const handleClick3 = () => {
  //     console.log("Click me");
  //   };
  //   const jsx = (
  //     <>
  //       <h2>hello</h2>
  //       <h2>hello</h2>
  //     </>
  //   );
  const users = [
    {
      name: "User 1",
      email: "user1@gmail.com",
    },
    {
      name: "User 2",
      email: "user1@gmail.com",
    },
    {
      name: "User 3",
      email: "user1@gmail.com",
    },
  ];

  return (
    <Fragment>
      {/* <Header></Header>
      <main>
        <h1>Trang chủ</h1>
        {jsx}
        <button onClick={handleClick}>Click me</button>
        <button
          onClick={(e) => {
            handleClick2(e.target.innerText);
          }}
        >
          click me 2
        </button>
      </main>
      <Footer></Footer>
      <User name="Đức Minh 2" email="dmin@gmail.com" onclick={handleClick3}>
        <Avatar src={`https://picsum.photos/200`}></Avatar>
      </User>
         {users.map((user, index) => {
        return <User key={index} {...user}></User>;
      })}
              <button
          onClick={(e) => {
            handleClick2(e.target.innerText);
          }}
        >Click me2</button> */}
      <User name="minh" email="dmin@gmail.com">
      <Avatar src="https://fastly.picsum.photos/id/268/200/300.jpg?hmac=M1JKzVXjrhIffE66T4sLediL7lhGmvS2rNr8pW2JipE"></Avatar>
      <Footer></Footer>
      </User>
     
    </Fragment>
  );
}
