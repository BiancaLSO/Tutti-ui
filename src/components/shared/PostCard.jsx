import style from "./PostCard.module.css";

export default function PostCard({ isLoading, posts }) {
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
              <h1 className={style.title}>{post.name}</h1>
              <p className={style.desc}>{post.description}</p>
              <p>
                {" "}
                <b>&#127925; {post.activeMusicians}</b>
              </p>
              <div className={style.spans}>
                <span> {post.practiceFrequency}</span>
                <span> 📍 {post.genre}</span>
              </div>
              <div className={style.join}>
                <button>Join</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
