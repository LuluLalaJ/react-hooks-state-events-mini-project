import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })

  function updateForm(event) {
    const key = event.target.name
    const value = event.target.value 
    setFormData({
      ...formData,
      [key]: value,
    })
  }

  function submitAndClear(e, formData) {
    onTaskFormSubmit(e,formData);
    setFormData({
      text: "",
      category: "Code"})
  }

  const renderOptions = categories.map(category => {
    if (category !== "All") {
      return (<option key={category} name={category}>{category}</option>)
    }
  })

  return (
    <form className="new-task-form" onSubmit={(e)=>submitAndClear(e, formData)}>
      <label>
        Details
        <input type="text" name="text" onChange={updateForm} value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={updateForm} value={formData.category}>
          {/* render <option> elements for each category here */}
          {renderOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
