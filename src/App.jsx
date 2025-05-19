import React, { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post/Post'
import './App.css'

function App() {
  const [currentFilter, setCurrentFilter] = useState('Todas')

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter)
  }

  return (
    <div className="bg-stone-950">
      <Sidebar onFilterChange={handleFilterChange} />
      <div className="container mx-auto px-4 py-6">
        <Post filter={currentFilter} />
      </div>
    </div>
  )
}

export default App