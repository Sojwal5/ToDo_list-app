import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import "./App.css";



function App() {
  return (
    <center class="todo-container">
      <AppName/>
      <AddToDo/>

      <div class="container ">
        <div class="row kg-row">
          <div class="col-6">
             buy milk
          </div>
          <div class="col-4">date</div>
          <div class="col-2"><button type="button" class="btn btn-danger kg-button">Delete</button></div>
        </div>
        <div class="row kg-row">
          <div class="col-6">
             buy milk
          </div>
          <div class="col-4">date</div>
          <div class="col-2"><button type="button" class="btn btn-danger kg-button">Delete</button></div>
        </div>
      </div>


    </center>
  );
}

export default App;
