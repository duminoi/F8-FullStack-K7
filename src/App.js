import "./assest/home.scss";
import config from "../config.json";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const { SERVER_API: server } = config;
  console.log(process.env.SERVER_API);
  return `
   ${Header()}
   <h3>Config: ${server}</h3
   <h2>SERVER_API = ${process.env.SERVER_API}</h2>
  <h1>Hello World</h1>
  ${Footer()}
  `;
}
