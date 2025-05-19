import { useForm } from 'react-hook-form'
import { Loader2, X, Send } from 'lucide-react'

export const Form = ({ onSubmit, onCancel, isSubmitting, error }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const submit = (data) => {
    onSubmit(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-6 p-4 bg-white rounded-lg shadow-md">
      

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
        <input
          {...register('name', { required: 'El nombre es obligatorio' })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          placeholder="Tu nombre"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Comentario</label>
        <textarea
          {...register('content', { required: 'El comentario es obligatorio' })}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          placeholder="Escribe tu comentario..."
          rows={4}
        />
        {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
      </div>

      {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          disabled={isSubmitting}
        >
          <X size={16} />
          Cancelar
        </button>
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition disabled:bg-indigo-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={16} />
              Enviando...
            </>
          ) : (
            <>
              <Send size={16} />
              Agregar
            </>
          )}
        </button>
      </div>
    </form>
  )
}
