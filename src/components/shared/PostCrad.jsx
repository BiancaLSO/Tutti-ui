import { useState, useEffect } from "react";
import style from "./PostCard.module.css";

export default function PostCard() {
    
const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/home")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const posts = [];

        for (const key in data) {
          const post = {
            id: key,
            ...data[key],
          };

          posts.push(post);
        }
        setIsLoading(false);
        setPosts(posts);
      });
  }, [setPosts]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }


    return (
        <>
        {posts.map((post, index) => {
            return (

            <div className={style.card}>
              <div key={index}>
                {/* <h2>{post.id}</h2> */}
                <h1 className={style.title}>{post.title}</h1>
                <p className={style.desc}>{post.description}</p>
                <p> <b>&#127925; {post.instrument}</b></p>
                <div className={style.spans}>
                <span> {post.genre}</span>
                <span> 📍 {post.location}</span>
                </div>
              </div>
              </div>
        
            );
          })}
          </>
    )

}