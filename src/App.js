import { useSelector } from "react-redux";
// import { statusFilter } from "./components/StatusFilter/StatusFilter";
import { Task } from "./components/Task/Task";

function App() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="App">
      {/* <statusFilter /> */}
      <Task />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
