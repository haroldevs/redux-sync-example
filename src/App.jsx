import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList />}></Route>
          <Route path="/create-task" element={<TaskForm />}></Route>
          <Route path="/edit-task/:id" element={<TaskForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
