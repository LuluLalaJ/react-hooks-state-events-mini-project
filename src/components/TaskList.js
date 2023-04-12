import React, { useState } from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList( {tasks, onDelete}) {  
  // const [ taskDisplayed, setTaskDisplayed ] = useState(tasks)
  // console.log('taskDisplayed', taskDisplayed)


  const displayTasks = tasks.map( task => <Task key={uuid()} task={task} onDelete={() => onDelete(task)}/>)
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTasks}
    </div>
  );
}

export default TaskList;
