import FriendList from "../FriendList/FriendList";
import "./Sidebar.css";
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import { Users } from "../../seeds";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeedOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeedOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <RssFeedOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
         <FriendList key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  );
}