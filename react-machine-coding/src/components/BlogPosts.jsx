import React from "react";
import "../App.css";
import postsData from "../../data/data.js";
import PostCard from "./PostCard.jsx";

export default function BlogPosts() {
  return (
    <div className="blog-post">
      <h2>Blog Posts </h2>

      {postsData.map((post) => (
        <PostCard
          id={post.id}
          title={post.title}
          body={post.body}
          tags={post.tags}
          reactions={post.reactions}
          views={post.views}
        />
      ))}
    </div>
  );
}
