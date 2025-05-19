import React, { useState, useEffect } from 'react'
import { Card } from '../Card'
import { BarLoader } from 'react-spinners'
import { usePosts } from '../../shared/hooks/usePosts'

export const Post = ({ filter = 'Todas' }) => {
  const { posts, isFetching } = usePosts()
  const [filteredPosts, setFilteredPosts] = useState([])
 

  useEffect(() => {
    if (posts) {
      if (filter === 'Todas') {
        setFilteredPosts(posts)
      } else {
        const filtered = posts.filter(post => post.curse === filter)
        setFilteredPosts(filtered)
      }
    }
  }, [posts, filter])

  if(isFetching) {
    return(
      <div className="flex justify-center my-8">
        <BarLoader color="#4f46e5" />
      </div>
    )
  }

  return (
    <div >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post._id}>
              <Card 
                id={post._id}
                title={post.title}
                content={post.content}
                curse={post.curse}
                comments={post.comments}
              />
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-red-50">
            No hay publicaciones disponibles para este curso.
          </div>
        )}
    </div>
  )
}