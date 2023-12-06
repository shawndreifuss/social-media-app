import React from 'react'
import './Rightbar.css'
import { Users } from '../../seeds'
import Online from '../Online/Online'

const Rightbar = ({profile}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
  
  const HomeRightbar = () => {
  return (
  <> <div className="birthdayContainer">
  <img className='birthdayImg' src="/assets/gift.png" alt="" />
  <span className="birthdayText">
    {' '}
   <b> Shawn Dreifuss </b> <b> and 3 other friends</b> have a birthday today!
  </span>
</div>
<img src="/assets/ads.png" alt="" className="rightbarAd" />
<h4 className="rightbarTitle">Online Friends</h4>
<ul className="rightbarFriendList">
  {Users.map(u => 
 <Online key={u.id} user={u}/>
  )}
</ul>
</>
  )}

  const ProfileRightbar = (profile) => {
    return (
    <> 
    <h4 className='rightbarTitle'>User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">New York</span>
      </div>
    
    <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Madrid</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Taken</span>
      </div>
      </div>
      <h4 className='rightbarTitle'>User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/profile/profile19.png" alt="" className="rightbarFollowingImg" />
          <div className="rightbarFollowingName">Shawn y D</div>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profile/profile19.png" alt="" className="rightbarFollowingImg" />
          <div className="rightbarFollowingName">Shawn y D</div>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profile/profile19.png" alt="" className="rightbarFollowingImg" />
          <div className="rightbarFollowingName">Shawn y D</div>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/profile/profile19.png" alt="" className="rightbarFollowingImg" />
          <div className="rightbarFollowingName">Shawn y D</div>
        </div>
      </div>
    
    
    </>
    )}

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
       
      </div>
    </div>
  )
}

export default Rightbar