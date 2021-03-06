import React from 'react';
import {
  Box,
  Grid,
  Button,
  Typography
} from "@material-ui/core";
import GrayRain from "../../assets/images/rain.svg";
import FeedbackIcon from "../../assets/images/about-feedback.svg"
import { ArrowRightIcon } from "../../assets/icons";

const Feedback = () => (
  <Box
    width={1}
    height="25rem"
    px={4}
    display="flex"
    style={{
      backgroundImage: `linear-gradient(0deg, #FFFFFF 0%, rgba(255,255,255,0.95) 71.03%, rgba(255,255,255,0.85) 100%), url(${GrayRain})`}}
  >
    <Grid
      container
      justify="space-between"
      alignItems="center"
    >
      <Grid
        item
        md={1}
      >
        <img width="100%" src={FeedbackIcon} alt="Feedback" />
      </Grid>
      <Grid
        item
        md={7}
      >
        <Typography
          variant="h3"
          data-testid="feedbackMsg"
        >
          Please give us feedback
        </Typography>
        <Typography variant={"h5"}>
          We are human-centered at our core and rely on user feedback for product iterations.
        </Typography>
      </Grid>
      <Grid
        item
        md={3}
      >
        <Button
          variant="outlined"
          href="https://forms.gle/nXCvPEkjx6VdF6Px6"
        >
          Share your thoughts &nbsp;<ArrowRightIcon/>
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default Feedback;
