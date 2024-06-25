"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import { topPlaces } from "@/constants";
import styled from "@emotion/styled";

export default function CustomForm() {
  const [topPlace, setTopPlace] = useState("");
  const [rating, setRating] = useState(0);
  const [date, setDate] = useState("");

  const handleSelectChange = (event) => {
    setTopPlace(event.target.value);
  };

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const StyledBox = styled(Box)`
    width: 24em;
    border-radius: 8px;
    padding: 1em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #000000;
  `;

  const StyledFormControl = styled(FormControl)`
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1.5em;
  `;

  const StyledInputLabel = styled(InputLabel)`
    color: rgba(253, 186, 116, 0.5); /* Orange Color with 50% Opacity */
    &.Mui-focused {
      color: rgba(253, 186, 116, 1); /* Orange Color when Focused */
    }
  `;

  const StyledSelect = styled(Select)`
    background-color: #000000;
    color: rgba(
        253,
        186,
        116, 0.5
      );

    .MuiOutlinedInput-notchedOutline {
      border-color: rgba(
        253,
        186,
        116,
        0.5
      ); /* Orange Border with 50% Opacity */
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: rgba(253, 186, 116, 1); /* Orange Border on Hover */
    }

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: rgba(253, 186, 116, 1); /* Orange Border when Focused */
    }

    .MuiSvgIcon-root {
      color: rgba(253, 186, 116, 1); /* Orange Icon */
    }
  `;

  const StyledMenuItem = styled(MenuItem)`
    color: black;

    &:hover {
      background-color: rgba(
        253,
        186,
        116,
        0.5
      ); /* Orange Background on Hover */
    }
  `;

  const StyledTextField = styled(TextField)`
    & .MuiOutlinedInput-root {
      background-color: #000000;
      color: rgba(253, 186, 116, 0.5);

      & fieldset {
        border-color: rgba(
          253,
          186,
          116,
          0.5
        );
      }

      &:hover fieldset {
        border-color: rgba(253, 186, 116, 1); /* Orange Border on Hover */
      }

      &.Mui-focused fieldset {
        border-color: rgba(253, 186, 116, 1); /* Orange Border when Focused */
      }
    }

    & .MuiInputLabel-root {
      color: rgba(253, 186, 116, 0.5); /* Orange Color with 50% Opacity */

      &.Mui-focused {
        color: rgba(253, 186, 116, 1); /* Orange Color when Focused */
      }
    }
  `;

  const StyledRating = styled(Rating)`
    & .MuiRating-iconEmpty {
      color: rgba(253, 186, 116, 0.5); /* Orange color for empty icons */
    }

    & .MuiRating-iconFilled {
      color: #fb923c; /* Orange color for filled icons */
    }
  `;

  return (
    <StyledBox component="form" noValidate autoComplete="off">
      <StyledFormControl>
        <StyledInputLabel id="place-select-label">
          Choose a place
        </StyledInputLabel>
        <StyledSelect
          labelId="place-select-label"
          id="place-select"
          value={topPlace}
          onChange={handleSelectChange}
          label="Choose a place"
        >
          {topPlaces.map((place, index) => (
            <StyledMenuItem key={index} value={place.title}>
              {place.title}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>

      <StyledFormControl>
        <StyledTextField
          id="upload-photo"
          type="file"
          InputLabelProps={{ shrink: true }}
          label="Upload a photo"
        />
      </StyledFormControl>

      <StyledFormControl>
        <StyledRating
          name="place-rating"
          value={rating}
          onChange={handleRatingChange}
        />
      </StyledFormControl>

      <StyledFormControl>
        <StyledTextField
          id="multiline-text"
          label="Comments"
          multiline
          rows={4}
          defaultValue=""
        />
      </StyledFormControl>

      <StyledFormControl>
        <StyledTextField
          id="date-picker"
          label="Date"
          type="date"
          value={date}
          onChange={handleDateChange}
          InputLabelProps={{ shrink: true }}
        />
      </StyledFormControl>
    </StyledBox>
  );
}
