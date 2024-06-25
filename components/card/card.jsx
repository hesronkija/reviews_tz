"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import styled from "@emotion/styled";
import { Btn } from "@/components";

const StyledCard = styled(Card)`
  width: 320px;
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  color: #fb923c;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledCardActionArea = styled(CardActionArea)`
  display: flex;
  flex-direction: column;
  height: 90%;
`;

const MediaContainer = styled.div`
  height: 66.67%;
  overflow: hidden;
`;

const StyledCardMedia = styled.img`
  transform: scale(1.25);
  transition: all 0.5s ease;
  height: 100%;
  width: 100%;
  &:hover {
    transform: scale(1);
  }
`;

const StyledCardContent = styled(CardContent)`
  height: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  font-weight: 200;
  letter-spacing: 0.1em;
  color: #fb923c;
  height: 100%;
`;

const StyledCardActions = styled(CardActions)`
  height: 10%;
`;

const MyCard = ({ title, description, image }) => {
  return (
    <StyledCard sx={{backdropFilter: "blur(2px);"}}>
      <StyledCardActionArea>
        <MediaContainer>
          <StyledCardMedia src={image} alt={title} />
        </MediaContainer>
        <StyledCardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <StyledTypography variant="body2" color="text.secondary">
            {description}
          </StyledTypography>
        </StyledCardContent>
      </StyledCardActionArea>
      <StyledCardActions>
        <Btn>Submit Review</Btn>
      </StyledCardActions>
    </StyledCard>
  );
};

export default MyCard;
