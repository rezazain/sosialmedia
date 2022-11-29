import React from "react";
import { Posts } from "../../dummyData";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((e) => (
          <Post key={e.id} post={e} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
