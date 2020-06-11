import React from 'react'

const categories = [
    'travel',
    'dining',
    'groceries',
    'auto-rental',
    'gas',
    'shopping',
    'entertainment',
    'drugstore',
    'bill',
    'food-delivery',
    'rideshare',
]

const SearchByCategory = ({ searchBy, selected }) => {
    let selectedButton = selected

    if (!selected) {
        selectedButton = categories[0]
        setTimeout(() => {
            searchBy(selectedButton)
        }, 600)
    }

    return (
        <div className="pill-container">
            {categories.map(category => {
                return (
                    <button 
                        key={`pill-${category}`} 
                        onClick={() => searchBy(category)}
                        className={`pill ${selectedButton === category ? 'selected' : ''}`}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default SearchByCategory
