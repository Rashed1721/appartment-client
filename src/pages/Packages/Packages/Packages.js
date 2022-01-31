import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Package from "../Package/Package";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch("https://mighty-hollows-24584.herokuapp.com/allPackages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure You Want to Delete ? ");
    if (proceed) {
      fetch(`https://mighty-hollows-24584.herokuapp.com/deletePackage/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        //   delete will not send any data thats why it does not have body  method
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted");

            const remaining = packages.filter((pd) => pd._id !== id);
            setPackages(remaining);

            setControl(!control);
          } else {
            setControl(false);
          }
        });
    }
  };

  return (
    <div>
      <Typography variant="h3" color="secondary" sx={{ mt: "100px" }}>
        Apartment Packages
      </Typography>
      <Grid item container xs={12} spacing={4}>
        {/* this line is for side space of the page  */}
        <Grid item xs={false} md={1}></Grid>
        <Grid
          item
          container
          xs={false}
          md={10}
          justifyContent="space-around"
          sx={{ my: "40px" }}
        >
          {packages.map((pd) => (
            <Package key={pd._id} pd={pd} handleDelete={handleDelete}></Package>
          ))}
        </Grid>

        <Grid item xs={false} md={1}></Grid>
      </Grid>
    </div>
  );
};

export default Packages;
