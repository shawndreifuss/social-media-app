import React from 'react'
import './ShareBtn.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';


const styles = {
    imageBtn: {
        color: '#3b5998'
    },
    videoBtn: { 
        color: 'tomato'
    },
    tagBtn: {   
        color: 'orange'
    },
    shareBtn: {
        color: '#0e76a8'
    },
}


const ShareBtn = () => {
  return (
    <>
    <head>
<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"/>
</head>

<div className="shareBtn">
  <div class ="frame">
    <div className="icons">
    <a href="/" class="btn">
  <PermMediaIcon  style={styles.imageBtn}></PermMediaIcon>
</a>
    <a href="/" class="btn">
  <VideoCameraBackOutlinedIcon style={styles.videoBtn}></VideoCameraBackOutlinedIcon>
</a>
    <a href="/" class="btn">
 <LabelOutlinedIcon  style={styles.tagBtn}></LabelOutlinedIcon>
</a>
</div>
<div className="postShare">
    <a href="/" class="btn sharedBtn">
 <i  style={styles.shareBtn}>Share</i>
</a>
</div>
</div>
</div>
    </>
  )
}

export default ShareBtn