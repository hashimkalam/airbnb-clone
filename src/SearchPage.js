import React from "react";
import "./SearchPage.css";
import { Button } from "@mui/material";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 August to 30 August . 2 Guest</p>
        <h1>Stays Nearby</h1>

        <Button variant="outlined">Cancellation</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms are beds</Button>
        <Button variant="outlined">More filters</Button>

        <SearchResult
          img="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          location="Private room in center of London"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
          star={4.73}
          price="$30 / night"
          total="$90 total"
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          location="Private room in center of London"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
          star={4.73}
          price="$30 / night"
          total="$90 total"
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          location="Private room in center of London"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
          star={4.73}
          price="$30 / night"
          total="$90 total"
        />
        <SearchResult
          img="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          location="Private room in center of London"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
          star={4.73}
          price="$30 / night"
          total="$90 total"
        />
      </div>
    </div>
  );
}

export default SearchPage;
