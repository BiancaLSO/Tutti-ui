import Footer from "./shared/Footer";
import Navigation from "./shared/Navigation";
import { useState, useEffect } from "react";

export default function Home() {
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
      <Navigation></Navigation>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            {/* <h2>{post.id}</h2> */}
            <h2>{post.title}</h2>
            <h2>{post.description}</h2>
            <h2>{post.instrument}</h2>
            <h2>{post.genre}</h2>
            <h2>{post.location}</h2>
            <hr />
          </div>
        );
      })}
      {/* <Footer /> */}
    </>
  );
}
