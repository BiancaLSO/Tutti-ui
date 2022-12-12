import style from "./PostCard.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostCard({ posts }) {
  const navigate = useNavigate();
  const [popupcontent, setPopupcontent] = useState([]);
  const [popUpToggle, setPopUpToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get User Id & Token from Local Storage
  const tokenFromStorage = localStorage
    .getItem("token")
    .replace(/^"(.*)"$/, "$1");
  const idFromStorage = localStorage.getItem("id").replace(/^"(.*)"$/, "$1");

  // Get the Ensemble Object based on the specific id
  const getEnsembleId = (id) => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenFromStorage}`,
      },
      mode: "cors",
    };

    fetch("http://localhost:3000/ensembles/by/" + id, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Add the specific ensemble to the user's profile
  const joinEnsemble = (id, ensemble) => {
    console.log("You joined th ensemble");

    const data = {
      id,
      ensemble,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenFromStorage}`,
      },
      mode: "cors",
      body: JSON.stringify(data),
    };

    fetch(
      `http://localhost:3000/profile/${idFromStorage}/ensembles`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Open modal & Join ensemble
  const handleJoin = (id) => {
    setIsModalOpen(!isModalOpen);
    console.log(id);
    const ensemble = getEnsembleId(id);
    joinEnsemble(idFromStorage, ensemble);
  };

  // Close the Joined modal
  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Redirect button to the My Ensembles in the Joined modal
  const redirectEnsembles = () => {
    navigate("/musician");
  };

  // Show modal for each post
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
              <span className={style.italic}>ENSEMBLE {post._id}</span>
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
                  <button onClick={() => handleJoin(post._id)}>Join</button>
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

      {isModalOpen && (
        <div className={style.popUp}>
          <div className={style.popUpBody}>
            <div className={style.popUpHeader}>
              <button className={style.delete} onClick={closeModal}>
                X
              </button>
              <p className={style.popUpTitle}>You joined the ensemble!</p>
            </div>
            <div className={style.popUpContent}>
              <p className={style.popUpText}>
                You can see your joined ensembles in your profile under
                <span className={style.popUpNav} onClick={redirectEnsembles}>
                  {" "}
                  My Ensembles
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
