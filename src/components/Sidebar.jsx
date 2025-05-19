import React, { useState } from 'react'
import { Select } from './Select'

export const Sidebar = ({ onFilterChange }) => {
  return (
    <div>
        <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
            <a className="font-bold text-xl tracking-tight" href="#">Publicaciones</a>
            <div className="flex items-center">
                <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">
                    <Select onFilterChange={onFilterChange} />
                </a>
              {/*
              <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">About</a>
                <a className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Contact</a>
              */}
            </div>
        </nav>
    </div>
  )
}