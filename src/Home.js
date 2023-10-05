import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import HeaderOptions from "./HeaderOptions";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";

function Home() {
  return (
    <div className="home">
      <HeaderOptions />
      <Banner />

      <div className="home__priceDisplay">
        <div className="home__priceDisplayText">
          <p>Display total price</p>
          <span>
            <p> | </p>
            <p>Include all feed, before taxes</p>
          </span>
        </div>
        <ToggleOffIcon className="home__priceDisplayToggle" />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          rating={4.55}
          distance="4,282 kilometers away"
          date="Jan 9 - 14"
          price="Rs164,855"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          rating={4.55}
          distance="4,282 kilometers away"
          date="Jan 9 - 14"
          price="Rs164,855"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          rating={4.55}
          distance="4,282 kilometers away"
          date="Jan 9 - 14"
          price="Rs164,855"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          rating={4.55}
          distance="4,282 kilometers away"
          date="Jan 9 - 14"
          price="Rs164,855"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          rating={4.55}
          distance="4,282 kilometers away"
          date="Jan 9 - 14"
          price="Rs164,855"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          rating={4.55}
          distance="4,282 kilometers away"
          date="Jan 9 - 14"
          price="Rs164,855"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          rating={4.55}
          distance="4,282 kilometers away"
          date="Jan 9 - 14"
          price="Rs164,855"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          rating={4.55}
          distance="4,282 kilometers away"
          date="Jan 9 - 14"
          price="Rs164,855"
        />
      </div>
    </div>
  );
}

export default Home;
