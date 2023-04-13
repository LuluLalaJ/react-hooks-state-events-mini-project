import React, { useState } from "react";

function CategoryFilter({categories, filterByCategory}) {

  const [selectedCategory, setSelectedCategory] = useState(null)

  function rerenderByCategory(category) {
    setSelectedCategory(category)
    filterByCategory(category);
  }
  const renderButtons = categories.map(category => {
    const buttonClass = (category === selectedCategory ? "selected" : "")
    return (
      <button 
        key={category}
        className={buttonClass}
        onClick={() => rerenderByCategory(category)}
      >
        {category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;
