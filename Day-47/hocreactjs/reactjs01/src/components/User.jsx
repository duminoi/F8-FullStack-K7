/* eslint-disable react/prop-types */

export default function User({ name, email,children }) {
  console.log(children);
  return (
    <div>
      {children}
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      {/* <button onClick={onclick}>click me</button> */}
    </div>
  );
}
