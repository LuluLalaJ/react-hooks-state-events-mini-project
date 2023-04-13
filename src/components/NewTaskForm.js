import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })

  function updateFormData(event) {
    const key = event.target.name
    const value = event.target.value 
    setFormData({
      ...formData,
      [key]: value,
    })
  }

  function submitAndResetForm(e, formData) {
    e.preventDefault()
    onTaskFormSubmit(formData);
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
    <form className="new-task-form" onSubmit={(e)=>submitAndResetForm(e, formData)}>
      <label>
        Details
        <input type="text" name="text" onChange={updateFormData} value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={updateFormData} value={formData.category}>
          {renderOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
