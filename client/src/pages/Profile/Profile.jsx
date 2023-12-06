import "./Profile.css";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER; 
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/posts/stock-post5.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}  /profile/profile19.png`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Shawn Dreifuss</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}