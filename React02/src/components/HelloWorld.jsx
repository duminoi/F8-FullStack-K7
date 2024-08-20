import PropTypes from "prop-types";
export default function HelloWorld({ name, age, email }) {
  console.log(name, age, email);

  return <div>HelloWorld</div>;
}
HelloWorld.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  email: PropTypes.string,
};
