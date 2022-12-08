import { useState, useEffect } from "react";
import style from "./PostCard.module.css";

export default function PostCard() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/ensembles")
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
              <span className={style.italic}>ENSEMBLE</span>
              {/* <h2>{post.id}</h2> */}
              <h1 className={style.title}>{post.name}</h1>
              {/* <p className={style.desc}>{post.description}</p> */}
              <p>
              
                {/* {" "} */}
                <b>&#127925; {post.activeMusicians} active musicians</b>
              </p>

              <p>Practice Schedule: {post.practiceFrequency}</p>
              <div className={style.spans}>
                <a href ={post.link}>{post.link}</a>
                {/* <span> 📍 {post.genre}</span> */}
              </div>
              <div className={style.buttons}>
              <div className={style.join}>
                <button>Join</button>
              </div>
              <div className={style.more}>
                <button>See More</button>
              </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
