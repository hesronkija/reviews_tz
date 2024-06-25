"use client";
import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button/Button";

const StyledButton = styled(Button)`
  background-color: black;
  color: rgb(251 146 60 / 1);
  text-transform: capitalize;
  font-size: 1rem;
  transition: all 0.5s ease;

  &:hover {
    background-color: orange;
    color: black;
  }
`;

const ButtonComponent = ({ children }) => {
  return <StyledButton variant="contained">{children}</StyledButton>;
};

export default ButtonComponent;
