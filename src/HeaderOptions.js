import React from "react";
import "./HeaderOptions.css";
import ParkIcon from "@mui/icons-material/Park";
import TuneIcon from "@mui/icons-material/Tune";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import CabinIcon from "@mui/icons-material/Cabin";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import PianoIcon from "@mui/icons-material/Piano";
import HomeIcon from "@mui/icons-material/Home";
import NatureIcon from "@mui/icons-material/Nature";

function HeaderOptions() {
  return (
    <div className="headerOptions">
      <div className="headerOptions__container">
        <div className="headerOptions__option">
          <ParkIcon />
          <p>tropical</p>
        </div>
        <div className="headerOptions__option">
          <SingleBedIcon />
          <p>rooms</p>
        </div>
        <div className="headerOptions__option">
          <FreeBreakfastIcon />
          <p>Bed & breakfasts</p>
        </div>
        <div className="headerOptions__option">
          <ParkIcon />
          <p>Luxe</p>
        </div>
        <div className="headerOptions__option">
          <ParkIcon />
          <p>Iconic cities</p>
        </div>
        <div className="headerOptions__option">
          <ParkIcon />
          <p>Beachfront</p>
        </div>
        <div className="headerOptions__option">
          <CabinIcon />
          <p>Cabins</p>
        </div>
        <div className="headerOptions__option">
          <ParkIcon />
          <p>Lakefront</p>
        </div>
        <div className="headerOptions__option">
          <HomeIcon />
          <p>Tiny homes</p>
        </div>
        <div className="headerOptions__option">
          <ParkIcon />
          <p>Amazing views</p>
        </div>
        <div className="headerOptions__option">
          <ParkIcon />
          <p>Camping</p>
        </div>
        <div className="headerOptions__option">
          <ParkIcon />
          <p>A-frames</p>
        </div>
        <div className="headerOptions__option">
          <AgricultureIcon />
          <p>Farms</p>
        </div>
        <div className="headerOptions__option">
          <NatureIcon />
          <p>National parks</p>
        </div>
        <div className="headerOptions__option">
          <PianoIcon />
          <p>Grand pianos</p>
        </div>
        <div className="headerOptions__option">
          <PianoIcon />
          <p>Grand pianos</p>
        </div>
        <div className="headerOptions__option">
          <PianoIcon />
          <p>Grand pianos</p>
        </div>
        <div className="headerOptions__option">
          <PianoIcon />
          <p>Grand pianos</p>
        </div>
      </div>
      <div className="headerOptions__filter">
        <TuneIcon className="headerOptions__filterIcon" />
        <p>Filters</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
