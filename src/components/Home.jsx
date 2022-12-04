import styles from "./Home.module.css";
import Footer from "./shared/Footer";
import Navigation from "./shared/Navigation";
import { useState, useEffect } from "react";
import PostCard from "./shared/PostCard";

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
      <div className={styles.landing}>
        <p className={styles.headline}>
          Stedet hvor amatørmusikere finder hinanden og spiller musik sammen
        </p>

        <img src="./assets/landing-img.png" className={styles.picLand}></img>
      </div>
      <div className={styles.cards}>
        <PostCard></PostCard>
      </div>

      <Footer></Footer>
    </>
  );
}
