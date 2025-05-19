import React, {useEffect, useState} from 'react'
import {
    getPostRequest
} from '../../services/api'


export const usePosts = () => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const response = await getPostRequest()
              console.log('Respuesta de Axios:', response);


        if(response.err){
            console.error(response.err);
            alert('Error al obtener las publicación intenta de nuevo')
        }
        console.log(response)
        setPosts(response.data.publications);
        
    }

    useEffect(() => {
      getPosts()
    }, [])
    
  return {
    posts,
    getPosts,
    isFetching: !posts

  }
}

