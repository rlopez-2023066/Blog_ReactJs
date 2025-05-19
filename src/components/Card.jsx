  import { useState } from 'react'
  import { ChevronDown, ChevronUp, SquarePen } from 'lucide-react'
  import { Modal } from './Modal'
  import { Form } from './Form'
  import { useComments } from '../shared/hooks/useCommets'

  export const Card = ({ id, title, content, curse, comments: initialComments }) => {
    const [showComments, setShowComments] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [comments, setComments] = useState(initialComments || [])

    const { addComment, isSubmitting, error } = useComments()

  const handleAddComment = async (data) => {
    const { name, content } = data
    try {
      const response = await addComment({ name, content, publicationId: id })

      if (response && response.comment) {
        const commentWithDate = {
          ...response.comment,
          date: response.comment.date || new Date().toISOString()
        }
        setComments(prev => [commentWithDate, ...prev])
        setShowComments(true)
        setShowModal(false)
      }
    } catch (err) {
      console.error('Error agregando comentario:', err)
    }
}


    return (
      <div className='bg-stone-950'>
        <section className="justify-center antialiased bg-stone-950 text-gray-600 p-5">
          <div className='bg-stone-950'>
            <div className="max-w-2xl mx-auto bg-indigo-600 shadow-lg rounded-lg">
              <div className="px-6 py-5">
                <div className="flex items-start">
                  <div className="flex-grow truncate">
                    {/* Header */}
                    <div className="w-full sm:flex justify-between items-center mb-3">
                      <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">{title}</h2>
                      <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2 text-stone-950 bg-gray-50 rounded-lg px-2 py-1">
                        {curse}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex items-end justify-between whitespace-normal">
                      <div className="max-w-md text-indigo-100">
                        <p className="mb-2">{content}</p>
                      </div>
                    </div>

                    {/* Botón Comentar */}
                    <div className="py-4">
                      <button
                        onClick={() => setShowModal(true)}
                        className="text-white flex items-center gap-2 hover:underline"
                      >
                        <SquarePen size={20} />
                        Comentar
                      </button>
                    </div>

                    {/* Botón para mostrar/ocultar comentarios */}
                    <div
                      className="mt-4 flex items-center justify-between cursor-pointer"
                      onClick={() => setShowComments(!showComments)}
                    >
                      <h3 className="text-lg font-semibold text-white">Comentarios</h3>
                      {showComments ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
                    </div>

                    {/* Comentarios */}
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        showComments ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="overflow-y-auto pr-2 max-h-[300px]">
                        {comments && comments.length > 0 ? (
                          comments.map((comment, index) => {
                            const uniqueKey = comment._id ? comment._id : `comment-${index}-${Date.now()}`;
                            return (
                              <div key={uniqueKey} className="mb-2 p-2 bg-indigo-400 rounded text-white">
                                <div className="flex justify-between items-center mb-1">
                                  <h4 className="text-xl font-bold text-gray-50">{comment.name}</h4>
                                  <span className="text-sm text-indigo-100">
                                    {comment.date ? new Date(comment.date).toLocaleDateString() : 'Ahora'}
                                  </span>
                                </div>
                                {comment.content}
                              </div>
                            );
                          })
                        ) : (
                          <p className="text-indigo-200">No hay comentarios.</p>
                        )}
                      </div>
                    </div>

                    {/* Modal con Formulario */}
                    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                      <Form
                        onSubmit={handleAddComment}
                        onCancel={() => setShowModal(false)}
                        isSubmitting={isSubmitting}
                        error={error}
                      />
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }