// Modal.jsx
import React from 'react'

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black/30 backdrop-blur-md transition-opacity duration-300">
      <div className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-lg">
        <div className="flex items-center pb-4 text-xl font-medium text-slate-800">
          Agregar Comentario
        </div>

        <div className="border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
          {children}
        </div>
      </div>
    </div>
  )
}
