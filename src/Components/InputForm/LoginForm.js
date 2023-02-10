import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const ZODIAC_SIGNS = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sign, setSign] = useState("");
  const [day, setDay] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = () => {
    navigate("/astro", { state: { sign, day } });
  };

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "zodiac-sign":
        setSign(value);
        break;
      case "day":
        setDay(value);
        break;
    }
  };
  return (
    <div className="wrapper d-flex align-items-center justify-content-center w-100">
      <div className="login">
        <h1 className="mt-4 app"> Horoscope App </h1>
        <form className="form">
          <div className="form-group mb-2">
            <label htmlFor="name" className="form-label text">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control pt-3 pb-3"
              required
              placeholder="name"
              value={name}
              onChange={(event) => handleUserInput(event)}
            />
          </div>
          <div className="form-group mb-2 email">
            <label htmlFor="email" className="form-label text">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="form-control pt-3 pb-3"
              required
              placeholder="email"
              value={email}
              onChange={(event) => handleUserInput(event)}
            />
          </div>
          <div className="sign select form-control pt-3 pb-3">
            <select
              name="zodiac-sign"
              onChange={(event) => handleUserInput(event)}
            >
              <option value="" disabled selected>
                Select sign
              </option>
              {ZODIAC_SIGNS.map((eachSign, i) => (
                <option key={"zodiac-sign-" + i} value={eachSign}>
                  {eachSign}
                </option>
              ))}
            </select>
          </div>
          <div className="sign select form-control pt-3 pb-3">
            <select name="day" onChange={(event) => handleUserInput(event)}>
              <option value="" disabled selected>
                Select day
              </option>
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
              <option value="yesterday">Yesterday</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-success block w-100"
            id="btn"
            disabled={!name || !email || !sign || !day}
            onClick={handleFormSubmit}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
