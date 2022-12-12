import style from "./PostCard.module.css";
import { useState, useEffect } from "react";

export default function PostCard({ posts }) {
  const [popupcontent, setPopupcontent] = useState([]);
  const [popUpToggle, setPopUpToggle] = useState(false);

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
              <div className={style.genre}> &#127925; {post.genre}</div>

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
                    <div className={style.description}>{popup.description}</div>
                    <p className={style.practice}>
                      Practice Schedule: {popup.practiceFrequency}
                    </p>{" "}
                    <p className={style.music}>
                      <b>&#127925; {popup.activeMusicians} active musicians</b>
                    </p>
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
