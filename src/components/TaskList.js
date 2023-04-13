import React, { useState } from "react";
import Task from "./Task";

function TaskList( {tasks, onDelete}) {  

  const renderTasks = tasks.map( task => <Task key={task.text} text={task.text} category={task.category} deleteTask={onDelete}/>)
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {renderTasks}
    </div>
  );
}

export default TaskList;
