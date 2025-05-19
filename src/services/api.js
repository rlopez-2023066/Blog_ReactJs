import axios from 'axios'

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:2003/v1',
        timeout: 3000
    }
)

export const getPostRequest = async () => {
    try{
        return await apiClient.get('/publication/getPublications')
    }catch(err){
        return{
            error: true,
            err
        }
    }
}

export const addCommentRequest = async (commentData) => {
    try{
        return await apiClient.post('/comment/addComment', commentData)
    }catch(err){
        return {
            error: true,
            err
            
        }
    }
}

