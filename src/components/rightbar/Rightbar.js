import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assests/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>other friend</b> have a birthday today
          </span>
        </div>
        <img src="assests/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((e) => (
            <Online key={e.id} user={e} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTittle">User information</h4>
        <div className="rightInfo">
          <div className="rightInfoItem">
            <span className="rightbarInfoKey">City :</span>
            <span className="rightbarInfoValue">Bandung</span>
          </div>
          <div className="rightInfoItem">
            <span className="rightbarInfoKey">From :</span>
            <span className="rightbarInfoValue">Buahbatu</span>
          </div>
          <div className="rightInfoItem">
            <span className="rightbarInfoKey">Relationship :</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTittle">User friend</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assests/person/4.jpg"
              alt=""
              className="rightbarFollowImg"
            />
            <div className="rightbarFollowingName">Sharlyn</div>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/2.jpg"
              alt=""
              className="rightbarFollowImg"
            />
            <div className="rightbarFollowingName">Tiara</div>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/3.jpg"
              alt=""
              className="rightbarFollowImg"
            />
            <div className="rightbarFollowingName">Dianutami</div>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/6.jpg"
              alt=""
              className="rightbarFollowImg"
            />
            <div className="rightbarFollowingName">Travis Bennett</div>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/5.jpg"
              alt=""
              className="rightbarFollowImg"
            />
            <div className="rightbarFollowingName">Vikry</div>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assests/person/8.jpeg"
              alt=""
              className="rightbarFollowImg"
            />
            <div className="rightbarFollowingName">Gary Duty</div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
