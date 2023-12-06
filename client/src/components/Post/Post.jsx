import React, { useState } from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../../seeds";


const Post = ({ post }) => {

  const [like, setLike] =  useState(post.like);

const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like- 1 : like + 1);
   setIsLiked(!isLiked);
    
  }
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;



  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((user) =>  user.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">{Users.filter((u) =>  u.id === post?.userId)[0].username}</span>
            <span className="postDate">{PF + post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        
        </div>
        <div className="postCenter">
          
          <img
            className="postImg"
            src={post.photo}
            alt=""
          />
          
        </div>
        <span className="postText">{post?.desc}</span>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}/img/like.png`} onClick={likeHandler} alt="" />
            
            <span className="likeCounter">{like} people liked</span>
          </div>
          <div className="postBottomRight"></div>
          <span className="postCommentText">{post.comment} comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
