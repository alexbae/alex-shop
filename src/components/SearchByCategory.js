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
]

const SearchByCategory = ({ searchBy, selected }) => {
    return (
        <div className="pill-container">
            {categories.map(category => {
                return (
                    <button 
                        key={`pill-${category}`} 
                        onClick={() => searchBy(category)}
                        className={`pill ${selected === category ? 'selected' : ''}`}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default SearchByCategory
