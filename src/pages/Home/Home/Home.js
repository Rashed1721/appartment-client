import SearchIcon from "@mui/icons-material/Search";
import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Packages from "../../Packages/Packages/Packages";
import Reviews from "../../Reviews/Reviews/Reviews";
import Banner from "../Banner/Banner";
import SearchResult from "../SearchResult/SearchResult";
import Welcome from "../Welcome/Welcome";
import WhyUs from "../WhyUs/WhyUs";
import "./Home.css";

const Home = () => {
  const [packages, setPackages] = useState([]);
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    // sending data using query
    fetch(
      `https://mighty-hollows-24584.herokuapp.com/searchPackages?search=${search}`
    )
      .then((res) => res.json())
      .then((result) => setPackages(result));
  };

  return (
    <div>
      {/* Banner area  */}
      <Banner />
      {/* search area  */}
      <div>
        <input
          className="search"
          onChange={handleInput}
          type="text"
          placeholder="Search Your Desired Location "
        />
        <Button onClick={handleSearch} color="secondary">
          <SearchIcon />
        </Button>
      </div>
      {/* search result */}
      <Grid item container xs={12} spacing={2}>
        {/* this line is for side space of the page  */}
        <Grid item xs={false} md={1}></Grid>
        <Grid
          item
          container
          xs={false}
          md={10}
          justifyContent="space-evenly"
          sx={{ my: "40px" }}
        >
          {packages?.map((pd) => (
            <SearchResult key={pd._id} pd={pd}></SearchResult>
          ))}
        </Grid>
        {/* Welcome section  */}
        <Welcome></Welcome>

        {/* this line is for side space of the page  */}
        <Grid item xs={false} md={1}></Grid>
      </Grid>
      {/* Home packages  */}
      <Packages></Packages>
      {/* Why US area  */}

      <WhyUs />

      {/* Review area  */}
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
