import style from "./PostCard.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostCard({ posts }) {
  const navigate = useNavigate();
  const [popupcontent, setPopupcontent] = useState([]);
  const [popUpToggle, setPopUpToggle] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEnsemble, setSelectedEnsemble] = useState(undefined);
  const [hideButtons, setHideButtons] = useState(false);

  // Get User Id & Token from Local Storage
  const getToken = () => {
    return localStorage.getItem("token").replace(/^"(.*)"$/, "$1");
  };
  const getId = () => {
    return localStorage.getItem("id").replace(/^"(.*)"$/, "$1");
  };

  const tokenFromStorageEmpty = localStorage.getItem("token");

  // Get the Ensemble Object based on the specific id
  const getEnsembleId = (id) => {
    setIsModalOpen(!isModalOpen);
    const tokenFromStorage = getToken();
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenFromStorage}`,
      },
      mode: "cors",
    };

    fetch("http://localhost:3000/ensembles/by/" + id, requestOptions)
      .then((response) => response.json())
      .then((ensemble) => {
        setSelectedEnsemble(ensemble);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Add the specific ensemble to the user's profile
  const joinEnsemble = () => {
    const tokenFromStorage = getToken();
    const idFromStorage = getId();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenFromStorage}`,
      },
      mode: "cors",
      body: JSON.stringify(selectedEnsemble),
    };

    fetch(
      `http://localhost:3000/profile/${idFromStorage}/ensembles`,
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => setSelectedEnsemble(undefined));
    togglleButtons();
  };

  // Close the Joined modal
  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
    togglleButtons();
  };

  const togglleButtons = () => {
    setHideButtons(!hideButtons);
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
          <div className={style.card} key={index}>
            <div>
              <span className={style.italic}>ENSEMBLE</span>
              <h1 className={style.title}>{post.name}</h1>
              <div className={style.genre}> &#127925; {post.genre}</div>
              <div className={style.spans}>
                <a href={post.link}>{post.link}</a>
              </div>
              <div className={style.buttons}>
                <div className={style.join}>
                  <button
                    onClick={() => getEnsembleId(post._id)}
                    style={{
                      display: tokenFromStorageEmpty ? "block" : "none",
                    }}
                  >
                    +
                  </button>
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

      {isModalOpen && (
        <div className={style.popUp}>
          <div className={style.popUpBody}>
            <div className={style.popUpHeader}>
              <button className={style.delete} onClick={closeModal}>
                X
              </button>
            </div>
            <div className={style.popUpContentEns}>
              {!hideButtons && (
                <p className={style.popUpTitle}>
                  Are you sure you want to join this Ensemble?
                </p>
              )}

              {!hideButtons && (
                <div className={style.joinSet}>
                  <button onClick={joinEnsemble} className={style.joinBtn}>
                    YES
                  </button>
                  <button onClick={closeModal} className={style.joinBtn}>
                    NO
                  </button>
                </div>
              )}

              {hideButtons && (
                <p className={style.popUpText}>
                  You can see your joined ensembles in your profile under
                  <span className={style.popUpNav} onClick={redirectEnsembles}>
                    {" "}
                    My Ensembles
                  </span>
                  .
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
