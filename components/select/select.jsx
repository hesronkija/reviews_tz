/* eslint-disable react/react-in-jsx-scope */
"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { topPlaces } from "@/constants";
import styled from "@emotion/styled";

export default function BasicSelect() {
  const [topPlace, setTopPlace] = useState("");

  const handleChange = (event) => {
    setTopPlace(event.target.value);
  };

  const StyledBox = styled(Box)`
    width: 24em;
    border-radius: 8px;
    padding: 1em;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `;

  const StyledFormControl = styled(FormControl)`
    width: 100%;
    backdrop-filter: blur(1px);
    border-radius: 8px;
  `;

  const StyledInputLabel = styled(InputLabel)`
    color: rgba(253, 186, 116, 0.5); /* Orange Color with 50% Opacity */

    &.Mui-focused {
      color: rgba(253, 186, 116, 1); /* Orange Color when Focused */
    }
  `;

  const StyledSelect = styled(Select)`
    background-color: #1e293b; /* Slate Gray Background */
    color: white;

    .MuiOutlinedInput-notchedOutline {
      border-color: rgba(253, 186, 116, 0.5); /* Orange Border with 50% Opacity */
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
      background-color: rgba(253, 186, 116, 0.5); /* Orange Background on Hover */
    }
  `;

  return (
    <StyledBox>
      <StyledFormControl fullWidth>
        <StyledInputLabel id="demo-simple-select-label">Choose a place</StyledInputLabel>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="select"
          value={topPlace}
          label="TopPlace"
          onChange={handleChange}
        >
          {topPlaces.map((place, index) => (
            <StyledMenuItem key={index} value={place.title}>
              {place.title}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>
    </StyledBox>
  );
}