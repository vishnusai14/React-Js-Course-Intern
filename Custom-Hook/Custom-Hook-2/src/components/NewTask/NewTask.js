import useHttp from "../../hooks/useHttp";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const transformData = (taskText, data) => {
    console.log(taskText, data);
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  const { isLoading, error, sendHttpRequest } = useHttp(transformData);

  const enterTaskHandler = async (taskTextConfig) => {
    sendHttpRequest({
      url: "https://react-js-course-intern-default-rtdb.firebaseio.com/tasks.json",
      method: "POST",
      body: { text: taskTextConfig },
      headers: { "Content-Type": "application/json" },
    });
    transformData.bind(null, taskTextConfig);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
