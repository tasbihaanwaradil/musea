import React, { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image:
        "https://ik.imagekit.io/woc5s3hzw/image_AWW6wH4cQ.png?updatedAt=1792224119912",
      caption: "this is image",
    },
  ]);
  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts yet.</p>
      )}
    </section>
  );
};

export default Feed;
