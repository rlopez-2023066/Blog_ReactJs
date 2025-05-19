import { useState } from 'react'
import { addCommentRequest } from '../../services/api'

export const useComments = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const addComment = async ({ name, content, publicationId }) => {
    if (!name || !content || !publicationId) {
      setError('Todos los campos son obligatorios')
      return null
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await addCommentRequest({ name, content, publicationId })
      setIsSubmitting(false)

      if (response.error) {
        setError('Ocurrió un error al agregar el comentario.')
        return null
      }

      const comment = response.data
      comment._id ||= `temp-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
      return comment
    } catch (err) {
      setError('Ocurrió un error.')
      setIsSubmitting(false)
      return null
    }
  }

  return { addComment, isSubmitting, error }
}
