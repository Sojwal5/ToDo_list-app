import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import "./App.css";
import TodoItems from "./Components/TodoItems";



function App() {
  return (
    <center class="todo-container">
      <AppName/>
      <AddToDo/>
      <div className="items-container">
        <TodoItems TodoDate="3/4/5532" TodoName="buy milk" ></TodoItems>
        <TodoItems TodoDate="3/6/1995" TodoName="go to college" ></TodoItems>
      </div>

    </center>
  );
}

export default App;
