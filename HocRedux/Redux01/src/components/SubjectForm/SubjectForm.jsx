import { useDispatch } from "react-redux";
import { getVariable } from "../../redux/selector";

import { addNewSubject } from "../../redux/action";

export default function SubjectForm() {
  const dispatch = useDispatch();
  const inputValue = getVariable("inputValue");
  const option = getVariable("option");
  const formData = {
    inputValue: inputValue,
    option: option,
  };
  const handleClick = () => {
    console.log(inputValue);
    dispatch({ type: "count/increment" });
    dispatch(addNewSubject(formData));
  };
  const onInput = (e) => {
    dispatch({ type: "setInputValue", payload: e.target.value });
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch({ type: "setOption", payload: e.target.value });
  };
  return (
    <>
      <input
        onChange={onInput}
        type="text"
        placeholder="subject name"
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <select
        id="options"
        value={option}
        onChange={handleChange}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="" disabled>
          Select an priority
        </option>
        <option value="low">low</option>
        <option value="high">high</option>
        <option value="medium">medium</option>
      </select>
      <button onClick={handleClick} className="p-2 border rounded-lg">
        Add Subject
      </button>
    </>
  );
}
