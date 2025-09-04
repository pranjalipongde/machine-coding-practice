import React from "react";

const PostCard = ({ title, body, tags, reactions, views }) => {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p className="desc">{body}</p>

      <div className="tags">
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            #{tag}
          </div>
        ))}
      </div>

      <div className="numbers">
        <p>👍{reactions.likes} |</p>
        <p>👎{reactions.dislikes} |</p>

        <p>👁️{views} views</p>
      </div>
    </div>
  );
};

export default PostCard;
