import { useDispatch, useSelector } from "react-redux";
import {
  getVariable,
  subjects as subjectsSeletor,
} from "../../redux/selector.js";
import { useEffect } from "react";
import { getSubjects } from "../../redux/subject/index.js";

const ListSubject = () => {
  // get count variable and show it
  // useSelector se handle subjects trong selector.js
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.subjects);
  console.log("isLoading", isLoading);

  const subjects = useSelector(subjectsSeletor);
  useEffect(() => {
    // dispatch(getProducts());
    dispatch(getSubjects());
  }, []);
  //   console.log(subjects);

  return (
    <>
      <ul>
        {subjects.map((subject, index) => {
          return (
            <li key={index}>
              {subject.name} {subject.priority}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListSubject;
