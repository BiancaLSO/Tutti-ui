import styles from "./Signup.module.css";
import Navigation from "./shared/Navigation";
import { useState } from "react";
import Footer from "./shared/Footer";

export default function EnsembleProfile() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [address, setAddress] = useState("");
  const [activeMusicians, setActiveMusicians] = useState("");
  const [practiceFrequency, setPracticeFrequency] = useState("");
  const [genre, setGenre] = useState("");

  const onNameChange = (e) => setName(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onLinkChange = (e) => setLink(e.target.value);
  const onAddressChange = (e) => setAddress(e.target.value);
  const onActiveMusicians = (e) => setActiveMusicians(e.target.value);
  const onPracticeFrequency = (e) => setPracticeFrequency(e.target.value);
  const onGenreChange = (e) => setGenre(e.target.value);

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const clearForm = () => {
    setName("");
    setDescription("");
    setLink("");
    setAddress("");
    setActiveMusicians("");
    setPracticeFrequency("");
    setGenre("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tokenFromStorage = getToken();
    console.log(tokenFromStorage);

    const data = {
      name,
      description,
      link,
      address,
      activeMusicians,
      practiceFrequency,
      genre,
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

    // Check if token beares gets passed in headers
    console.log(requestOptions);

    fetch("http://localhost:3000/ensembles", requestOptions)
      .then((response) => response.json())
      .then((res) => console.log(res));

    clearForm();
  };

  return (
    <>
      <Navigation></Navigation>
      {/* <h2 st>Create a profile</h2> */}
      <form className={styles} onSubmit={handleSubmit}>
        <label>
          Name of the Ensemble
          <input
            type="text"
            placeholder="Ensemble Name"
            name="name"
            value={name}
            onChange={onNameChange}
          />
        </label>

        <label>
          Description
          <textarea
            placeholder="Description"
            name="description"
            value={description}
            onChange={onDescriptionChange}
          />
        </label>

        <label>
          Link
          <input
            type="text"
            placeholder="Link to website"
            name="link"
            value={link}
            onChange={onLinkChange}
          />
        </label>

        <label>
          Address
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={address}
            onChange={onAddressChange}
          />
        </label>

        <label>
          Active musicians
          <input
            type="number"
            placeholder="Active musicians"
            name="active"
            value={activeMusicians}
            onChange={onActiveMusicians}
          />
        </label>

        <label>
          Practice Frequency
          <input
            type="text"
            placeholder="Practice Frequency"
            name="practice"
            value={practiceFrequency}
            onChange={onPracticeFrequency}
          />
        </label>

        <label>
          Genre
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            value={genre}
            onChange={onGenreChange}
          />
        </label>
        <input type="submit" value="Create Profile" />
      </form>

      <Footer></Footer>
    </>
  );
}
