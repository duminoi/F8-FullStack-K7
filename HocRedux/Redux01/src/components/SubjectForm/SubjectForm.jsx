import { useDispatch, useSelector } from "react-redux";
import { getVariable } from "../../redux/selector";

import { addNewSubject } from "../../redux/action";
import {
  addSubject,
  setInputValue,
  setOption,
} from "../../redux/subjects/subject";

export default function SubjectForm() {
  const dispatch = useDispatch();
  const { inputValue } = useSelector((state) => state.subjects);
  const { option } = useSelector((state) => state.subjects);
  const formData = {
    inputValue: inputValue,
    option: option,
  };

  const handleClick = () => {
    console.log("inputValue", inputValue);
    console.log("option", option);

    dispatch({ type: "count/increment" });
    // dispatch(addNewSubject(formData)); sử dụng redux core
    dispatch(addSubject(formData));
  };
  const onInput = (e) => {
    // dispatch({ type: "setInputValue", payload: e.target.value }); Cách sử dụng redux core
    dispatch(setInputValue(e.target.value));
  };
  const handleChange = (e) => {
    // dispatch({ type: "setOption", payload: e.target.value });Cách sử dụng redux core
    dispatch(setOption(e.target.value));
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
