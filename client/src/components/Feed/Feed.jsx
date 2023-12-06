import React from 'react'
import './Feed.css'
import Share from '../Share/Share'
import Post from '../Post/Post'
import { Posts } from '../../seeds'

const Feed = () => {
  return (
    <div className='feed'>
      <div className="feedWrapper">
        <div className="feedItem">
          <Share />
          {Posts.map(post=>(
            <Post key={post.id} post={post} />
          
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feed