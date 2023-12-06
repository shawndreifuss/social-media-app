import { Chat, Notifications } from "@mui/icons-material";
import "./Topbar.css";
import  SearchIcon  from "@mui/icons-material/Search";
import PeopleIcon from '@mui/icons-material/People';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topBarLeft">
        <span className="logo">logo</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon"/>
          <input type="text" placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLink">
          <div className="topBarLink">Homepage</div>
          <div className="topBarLink">Timeline</div>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <PeopleIcon />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person-images/profile.jpeg" alt="" className="topBarImage" />
      </div>
    </div>
  );
};

export default Topbar;
