import React, { useState } from "react";
import { Header } from "../components/Header";
import "./adminpage.css";

/**
 * Adminpage that allows an admin to create a movie, release a movie, and create a registered user
 * @returns div that contains admin functionalities
 */
const Adminpage = () => {
  // Authentication Part of Adminpage

  const [adminPass, setAdminPass] = useState();
  const [authenticate, setAuthenticate] = useState(false);

  /**
   * Secret password to unlock Admin functionalties
   */
  const authenticateAdmin = () => {
    if (adminPass == "614") {
      setAuthenticate(true);
    }
  };

  // Functional Part of Adminpage

  const [createMovieValues, setCreateMovieValues] = useState({
    name: "",
    imageUrl: "",
    description: "",
    duration: "",
  });

  const handleCreateMovieChange = (e) => {
    setCreateMovieValues({
      ...createMovieValues,
      [e.target.name]: e.target.value,
    });
  };

  const [releaseMovieValues, setReleaseMovieValues] = useState({
    movieId: "",
  });

  const handleReleaseMovieChange = (e) => {
    setReleaseMovieValues({
      ...releaseMovieValues,
      [e.target.name]: e.target.value,
    });
  };

  const [addRegisteredUserValues, setAddRegisteredUserValues] = useState({
    name: "",
    emailAddress: "",
    card: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
    address: "",
    password: "",
  });

  const handleAddRegisteredUserChange = (e) => {
    setAddRegisteredUserValues({
      ...addRegisteredUserValues,
      [e.target.name]: e.target.value,
    });
  };

  // Functions to send requests to server

  /**
   * Create a movie
   * @returns null when any input is blank
   */
  const createMovie = async () => {
    console.log(createMovieValues);
    if (
      !createMovieValues.name ||
      !createMovieValues.imageUrl ||
      !createMovieValues.duration ||
      !createMovieValues.duration
    ) {
      window.alert("Please fill in all inputs");
      return;
    }
    await fetch("http://localhost:8080/api/v1/movie", {
      method: "POST",
      body: JSON.stringify(createMovieValues),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    window.alert("Movie Created");
  };

  /**
   * Releases a movie to all Guest Users
   * @returns null when the input is blank
   */
  const releaseMovie = async () => {
    if (!releaseMovieValues.movieId) {
      window.alert("Please fill in all inputs");
      return;
    }
    await fetch(
      `http://localhost:8080/api/v1/movie/${releaseMovieValues.movieId}/release`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));

    window.alert("Movie Released");
  };

  /**
   * Create a Registered User
   * @returns null if any input is blank
   */
  const addRegisteredUser = async () => {
    console.log(addRegisteredUserValues);
    if (
      !addRegisteredUserValues.name ||
      !addRegisteredUserValues.emailAddress ||
      !addRegisteredUserValues.address ||
      !addRegisteredUserValues.password
    ) {
      window.alert("Please fill in all inputs");
      return;
    }
    await fetch(`http://localhost:8080/api/v1/user/registered`, {
      method: "POST",
      body: JSON.stringify(addRegisteredUserValues),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    window.alert("Registered User Added");
  };

  return (
    <div className="adminpage">
      <div>
        <h1>Welcome Admin</h1>
        {authenticate == false ? (
          <div>
            <label>
              What is the Password? (Hint! The code for this course... ENSF
              ___?)
            </label>
            <br></br>
            <input
              placeholder="Password"
              onChange={(e) => setAdminPass(e.target.value)}
            />
            <br></br>
            <button onClick={() => authenticateAdmin()}>Authenticate</button>
          </div>
        ) : (
          <div>
            <p>Please fill in ALL information correctly and click on the button once. Be patient until a pop-up alert shows up.</p>
            <div>
              <form>
                <input
                  placeholder="name"
                  name="name"
                  onChange={handleCreateMovieChange}
                  type="text"
                  required
                />
                <input
                  placeholder="imageUrl"
                  name="imageUrl"
                  onChange={handleCreateMovieChange}
                  type="text"
                  required
                />
                <input
                  placeholder="description"
                  name="description"
                  onChange={handleCreateMovieChange}
                  type="text"
                  required
                />
                <input
                  placeholder="duration"
                  name="duration"
                  onChange={handleCreateMovieChange}
                  type="number"
                  required
                />
                <button type="button" onClick={() => createMovie()}>
                  Create Movie
                </button>
              </form>
            </div>
            <br></br>
            <br></br>
            <div>
              <input
                placeholder="movieId"
                name="movieId"
                onChange={handleReleaseMovieChange}
                type="number"
                required
              />
              <button onClick={() => releaseMovie()}>
                Release a Movie to All Users (With Announcement)
              </button>
            </div>
            <br></br>
            <br></br>
            <div>
              <input
                placeholder="name"
                name="name"
                onChange={handleAddRegisteredUserChange}
              />
              <input
                placeholder="emailAddress"
                name="emailAddress"
                onChange={handleAddRegisteredUserChange}
              />
              <input
                placeholder="cardNumber"
                name="card[cardNumber]"
                onChange={handleAddRegisteredUserChange}
              />
              <input
                placeholder="expiryDate"
                name="card[expiryDate]"
                onChange={handleAddRegisteredUserChange}
              />
              <input
                placeholder="cvv"
                name="card[cvv]"
                onChange={handleAddRegisteredUserChange}
              />
              <input
                placeholder="address"
                name="address"
                onChange={handleAddRegisteredUserChange}
              />
              <input
                placeholder="password"
                name="password"
                onChange={handleAddRegisteredUserChange}
              />
              <button onClick={() => addRegisteredUser()}>
                Add a Registered User
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Adminpage;
