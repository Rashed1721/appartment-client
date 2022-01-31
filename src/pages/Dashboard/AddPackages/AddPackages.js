import { Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import "./AddPackage.css";

const AddPackages = () => {
  const { user } = useAuth();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const proceed = window.confirm(
      "Are You Sure You Want To Add a New Package ? ?"
    );
    if (proceed) {
      alert("New Package Added");
      data.email = user?.email;
      data.status = "Pending";
      fetch("https://mighty-hollows-24584.herokuapp.com/addEvent", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
    }
  };
  return (
    <Container sx={{ mt: "100px" }}>
      <Paper>
        <Typography variant="h3" color="secondary">
          Add New Package
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("title", { required: true })}
            placeholder="Title"
            className="inputField"
          />
          <br />

          <input
            {...register("date", { required: true })}
            type="date"
            className="inputField"
          />
          <br />
          <input
            {...register("cost", { required: true })}
            type="number"
            placeholder="Cost"
            className="inputField"
          />
          <br />
          <input
            {...register("description", { required: true })}
            type="textarea"
            placeholder="Description"
            className="inputField"
          />
          <br />
          <input
            {...register("image", { required: true })}
            placeholder="Image Link (Ex: Freepik) "
            className="inputField"
          />
          <br />
          <select
            {...register("packageType", { required: true })}
            type="date"
            className="inputField"
          >
            <option value="single">Single Bedroom</option>
            <option value="couple">Double Bedroom</option>
            <option value="family">Four Bedroom</option>
          </select>
          <br />
          <Button
            type="submit"
            variant="contained"
            className="button"
            sx={{ my: "20px" }}
            color="secondary"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddPackages;
