import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import "./Home.css";
import assets from "../../assets/assets.js";
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={assets.heroBanner} alt="hero banner" className="banner-img" />
        <div className="hero-caption">
          <img
            src={assets.heroTitle}
            alt="hero title"
            className="caption-img"
          />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={assets.playIcon} alt="play" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={assets.infoIcon} alt="info" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Picks for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
