import React from "react";
import axios from "axios";
import "./zodic.css";
import { useLocation, useNavigate } from "react-router-dom";

const { useState, useEffect } = React;

const getZodicInfo = (sign, day) => {
  const options = {
    method: "POST",
    url: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
    params: { sign: sign, day: day },
    headers: {
      "X-RapidAPI-Key": "edc6bd0575msh7fb7aa8058de303p15ffd6jsn551bf87a46dd",
      "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
// Main component -------------------------------
const Main = (props) => {
  const [zodiacSign, setZodiacSign] = useState("");
  const [read, setRead] = useState();
  const [loading, setLoading] = useState(true);
  const [showCard, setShowCard] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(JSON.stringify(location));
    if (!location || !location.state) {
      navigate("/");
      return;
    }
    const { sign, day } = location.state;

    if (!sign || !day) {
      navigate("/");
      return;
    }

    setZodiacSign(sign);

    getZodicInfo(sign, day).then((data) => {
      console.log(data);
      setRead(data);
      setShowCard(true);
      setLoading(false);
    });
  }, [location.state]);

  return (
    <div className="main">
      <h2 className="head">Daily horoscope</h2>
      <div className="card-box">
        {loading ? (
          <Loader />
        ) : showCard ? (
          <Card {...read} sign={zodiacSign} />
        ) : null}
      </div>
    </div>
  );
};

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-a">
        <h1>{props.sign}</h1>
        <h2>{props.date_range}</h2>
      </div>
      <div className="card-b">
        <h2>Date: {props.current_date}</h2>
      </div>
      <div className="card-c">
        <p>{props.description}</p>
      </div>
      <div className="card-d">
        <span>
          Compatibility: <div>{props.compatibility}</div>
        </span>
        <span>
          Mood: <div>{props.mood}</div>
        </span>
        <span>
          Color: <div>{props.color}</div>
        </span>
        <span>
          Lucky number: <div>{props.lucky_number}</div>
        </span>
        <span>
          Lucky time: <div>{props.lucky_time}</div>
        </span>
      </div>
    </div>
  );
};

const Loader = (props) => {
  return (
    <div className="loader">
      Loading...
      <i class="fas fa-sync-alt fa-spin"></i>
    </div>
  );
};

export default Main;
