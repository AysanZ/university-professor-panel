import React from "react";
import cartData from "../../data/cart.json";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import css from "./Transcript.module.css";

const Transcript = () => {
  const [formData, setFormData] = useState({
    grade: "",
  });

  function handleChange(event) {
    const { name, value, id } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitToApi(formData);
  }

  const theme = {
    width: "73px",
    "& .MuiInputBase-root": {
      color: "white",
    },

    "& .MuiInputLabel-root": { color: "var(--blue)" },
    "& .MuiOutlinedInput-root": {
      "& > fieldset": { borderColor: "#858585" },
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
      "& > fieldset": {
        borderColor: "var(--blue)",
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& > fieldset": {
        borderColor: "var(--blue)",
      },
    },
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        {cartData.map((item, i) => (
          <div className={css.cart}>
            <img src="./avatar-01.jpg" alt="" />
            <span>{item.teacher}</span>
            <span className={css.gray}>
              <span>ID :</span> <span> {item.id} </span>
            </span>

            <TextField
              size="small"
              sx={theme}
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </div>
        ))}
      </div>
      <button className={css.btn} type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Transcript;
