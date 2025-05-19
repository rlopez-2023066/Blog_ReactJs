import React from 'react'

export const Select = ({ onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange(e.target.value)
  }

  return (
    <div>
      <select 
        defaultValue="Todas" 
        className="select"
        onChange={handleChange}
      >
        <option className='text-stone-950' disabled={true}>Filtrar por:</option>
        <option className='text-stone-950' value="Todas">Todas</option>
        <option className='text-stone-950' value="Taller">Taller</option>
        <option className='text-stone-950' value="Tecnología">Tecnología</option>
        <option className='text-stone-950' value="Practica Supervisada">Practica Supervisada</option>
      </select>
    </div>
  )
}