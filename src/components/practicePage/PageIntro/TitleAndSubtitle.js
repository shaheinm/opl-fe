import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles/index";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  space: {
    padding: theme.spacing(1),
  },
  titleTextField: {
    width: "54%",
  },
  subtitleTextField: {
    width: "50%",
  },
  titleInput: {
    ...theme.typography.h1,
  },
  subtitleInput: {
    ...theme.typography.subtitle1,
  }
}));

export default function TitleAndSubtitle(props) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.space}>
          <Typography
            variant={"h1"}
            data-testid={"title"}
          >
            {props.editing ?
              <TextField
                className={classes.titleTextField}
                InputProps={{ classes: { input: classes.titleInput } }}
                value={props.title}
              /> : props.title
            }{" "}{props.children}
          </Typography>
          {props.tags && props.tags.map((t, i) => (
            <Typography key={i} variant={"overline"}>
              #{t.tag}&nbsp;&nbsp;
            </Typography>
          ))}
        </Box>
        <Box className={classes.space}>
          <Typography
            variant={"subtitle1"}
            data-testid={"subtitle"}
          >
            {props.editing ?
              <TextField
                className={classes.subtitleTextField}
                InputProps={{ classes: { input: classes.subtitleInput } }}
                value={props.subtitle}
              /> :
              props.subtitle
            }
          </Typography>
        </Box>
      </Box>
    </>
  );
}
