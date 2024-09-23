import React from "react";
import { useSelector } from "react-redux";
// import getVariable from "../../redux/selector";
import { subjects as subjectsSelector } from "../../redux/selector";
function ListSubject() {
  // const count = getVariable("count");
  const subjects = useSelector(subjectsSelector);

  // console.log("subjects", subjects);
  // const search = getVariable("search");
  // console.log("search", search);

  return (
    <>
      {/* <h1>count: {count}</h1> */}
      <ul className="list-inside list-decimal pl-6 space-y-3">
        {subjects.map((item) => {
          return (
            <li
              className="bg-gray-100 p-2 rounded shadow hover:bg-gray-200"
              key={item.id}
              {...item}
            >
              {item.name}/{item.priority}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default React.memo(ListSubject);
