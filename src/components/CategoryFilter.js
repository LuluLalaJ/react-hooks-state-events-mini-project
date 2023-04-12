import React, { useState } from "react";

function CategoryFilter({categories, onDisplayCategory}) {

    const [selectedCategory, setSelectedCategory] = useState(null)

    function filterByCategory(category) {
      onDisplayCategory(category);
      setSelectedCategory(category)
    }
  const renderButton = categories.map(category => {
    const buttonClass = (category === selectedCategory ? "selected" : "")
    return (
      <button 
        key={category}
        className={buttonClass}
        onClick={() => filterByCategory(category)}>
        {category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */ }
      {renderButton}
    </div>
  );
}

export default CategoryFilter;
