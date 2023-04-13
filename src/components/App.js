import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [ filterCategory, setFilterCategory ] = useState("All")
  const [ tasks, setTasks] = useState(TASKS)

  function filterByCategory(category) {
    setFilterCategory(category)
  }

  const filteredTasks = tasks.filter( task => task.category === filterCategory || "All" === filterCategory)

  function deleteTask(taskText) {
    const updatedTasks = tasks.filter(task => task.text !== taskText )
    setTasks(updatedTasks)
  }  

  function handleSubmit(formData) {
    const updatedTasks = [...tasks, formData]
    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterByCategory={filterByCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit}/>
      <TaskList tasks={filteredTasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
