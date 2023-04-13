import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [ categoryDisplayed, setCategoryDisplayed ] = useState("All")
  const [ tasks, setTasks] = useState(TASKS)

  function displayCategory(category) {
    setCategoryDisplayed(category)
  }

  function handleDelete(text) {
    const updatedTasks = tasks.filter(task => task.text !== text )
    setTasks(updatedTasks)
  }  
  const tasksByCategory = tasks.filter( task => task.category === categoryDisplayed || "All" === categoryDisplayed)

  function handleSubmit(formData) {
    const updatedTasks = [...tasks, formData]
    setTasks(updatedTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onDisplayCategory={displayCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit}/>
      <TaskList tasks={tasksByCategory} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
