import style from "./PostCard.module.css";

export default function PostCard({ isLoading, posts }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [popupcontent, setPopupcontent] = useState([]);
  const [popUpToggle, setPopUpToggle] = useState(false);

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

  // show modal for each post
  const changeContent = (post) => {
    setPopupcontent([post]);
    setPopUpToggle(!popUpToggle);
  };
  return (
    <>
      {posts.map((post, index) => {
        return (
          <div className={style.card}>
            <div key={index}>
              <span className={style.italic}>ENSEMBLE</span>
              <h1 className={style.title}>{post.name}</h1>
              <p>
                <b>&#127925; {post.activeMusicians} active musicians</b>
              </p>

              <p>Practice Schedule: {post.practiceFrequency}</p>
              <div className={style.spans}>
                <a href={post.link}>{post.link}</a>
              </div>
              <div className={style.buttons}>
                <div className={style.join}>
                  <button>Join</button>
                </div>
                <div className={style.more}>
                  <button onClick={() => changeContent(post)}>See More</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {popUpToggle && (
        <div className={style.popUp} onClick={changeContent}>
          <div className={style.popUpBody} onClick={(e) => e.stopPropagation()}>
            <div className={style.popUpHeader}>
              <button className={style.delete} onClick={changeContent}>
                X
              </button>
            </div>
            <div className={style.popUpContent}>
              {popupcontent.map((popup) => {
                return (
                  <div className={style.popupCard}>
                    <h1 className={style.titles}>{popup.name}</h1>
                    <div className={style.location}> 📍 {popup.address}</div>
                    <div className={style.description}>
                      {" "}
                      {popup.description}
                    </div>
                    <div className={style.genre}> &#127925; {popup.genre}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
