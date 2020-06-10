import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import { useMutation } from "@apollo/react-hooks";

import { LOGIN } from "../../graphql";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    display: "flex",
    width: drawerWidth,
    backgroundColor: theme.palette.common.true_white,
    alignContent: "center",
    alignItems: "center",
  },
  loginForm: {
    display: "flex",
    flexWrap: "wrap",
    left: 0,
    right: 0,
  },
  formField: {
    margin: theme.spacing(1),
  },
  submitButton: {
    margin: theme.spacing(1),
    height: "35px",
    borderRadius: "17px",
  },
  btnText: {
    color: theme.palette.common.white,
  }
}));

const LoginDrawer = (props) => {
  const uRef = React.useRef();
  const pwdRef = React.useRef();

  const classes = useStyles();

  const [login] = useMutation(LOGIN);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await login({
      variables: { identifier: uRef.current.value, password: pwdRef.current.value },
      update: (proxy, { data }) => {
        if (data.login) {
          const jwt = data.login.jwt;
          proxy.writeData({
            data: { jwt }
          });
        }
      }
    });

    if (data.errors) console.error("Error logging in ", data.errors);
    if (data.login) {
      console.log(props);
      localStorage.setItem('token', data.login.jwt);
      props.navigate('/practice');
    }
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={props.open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {props.children}
      <form
        className={classes.loginForm}
        autoComplete="off"
        onSubmit={handleLogin}
      >
        <div>
          <TextField
            required
            id="username"
            inputRef={uRef}
            className={classes.formField}
            label="Username/Email"
            variant="outlined"
          />
          <TextField
            required
            id="password"
            inputRef={pwdRef}
            className={classes.formField}
            label="Password"
            type="password"
            variant="outlined"
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          <Typography variant={"overline"} className={classes.btnText}>
            <b>Login</b>
          </Typography>
        </Button>
      </form>
    </Drawer>
  );
}

export default LoginDrawer;
