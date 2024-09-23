import { useState } from "react";
import { useDispatch } from "react-redux";
// import { addNewSubject } from '../../redux/action'
import { postProducts, postSubjects } from "../../redux/subject";

const initialSubject = {
  name: "",
  priority: "Low",
};

const SubjectForm = () => {
  const [subject, setSubject] = useState(initialSubject);
  const dispatch = useDispatch();

  const onClick = () => {
    // console.log('onClick', subject)
    // dispatch(subjectSlice.actions.addSubject(subject))
    // dispatch(onCreateSubject(subject));
    // dispatch(postProducts(subject));
    dispatch(postSubjects(subject));
  };

  const onInputName = (e) => {
    setSubject({ ...subject, name: e.target.value });
  };

  return (
    <>
      <input
        value={subject.name}
        placeholder="subject name"
        onChange={onInputName}
      />
      <select
        value={subject.priority}
        onChange={(e) => setSubject({ ...subject, priority: e.target.value })}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={onClick}>click me</button>
    </>
  );
};

export default SubjectForm;
