import React from 'react'
import {Post} from '../components/Post/Post.jsx'
import { Sidebar } from '../components/Sidebar.jsx'

export const MainPages = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <div>
          <Post />
        </div>
      </div>
      
    </div>
  )
}

