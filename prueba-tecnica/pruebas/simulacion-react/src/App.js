import './App.css';
import React, { useState, useEffect } from "react";


function App() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
      return res.json()
    })
    .then(res => {
      console.log(res)
      setPosts(res);
    })
  },[]);

  return (
    <div className="App">
      {posts && posts.forEach(post => {
        <div key={post.id}>
          <h1>{post.id}</h1>
          <h2>{post.title}</h2>
        </div>
      })}
    </div>
  );
}

export default App;
