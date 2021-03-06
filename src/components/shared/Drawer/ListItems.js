import React from "react";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "@reach/router";
import ListItemText from '@material-ui/core/ListItemText';

import { ListItem, ListSubheader, Collapse, List, Typography } from '@material-ui/core';

function ListItemLink(props) {
  const { primary, to, toggle } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink} onClick={toggle}>
        <Typography variant="body2">{primary}</Typography>
      </ListItem>
    </li>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "inherit",
  },
  headers: {
    color: theme.palette.primary.main,
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
  listItems: {
    color: "#9FA4A3",
  },
}));

export function TopListItems(props) {
  const {toggle} = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className={classes.root} data-testid="drawerPractices">
      <ListSubheader>
        <Typography variant="overline" className={classes.headers}>Practices</Typography>
      </ListSubheader>
      <ListItem button>
        <Typography variant="body2">Please guide me</Typography>
      </ListItem>
      <ListItemLink to="/practice" primary="See everything" toggle={toggle} data-testid="SeeEverything"/>
      <ListItem button onClick={handleClick}>
        <ListItemText>
          <Typography variant="body2">By mobius loop</Typography>
        </ListItemText>
        {open ? <ExpandLess className={classes.headers}/> : <ExpandMore className={classes.headers} />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" className={classes.nested}>
          <ListItem button>
            <Typography variant="body2" className={classes.listItems}> #Discovery </Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="body2" className={classes.listItems}> #Options </Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="body2" className={classes.listItems}> #Delivery </Typography>
          </ListItem>
          <ListItem button>
            <Typography variant="body2" className={classes.listItems}> #Foundation </Typography>
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export function BottomListItems() {
  const classes = useStyles();
  return (
    <List className={classes.root} data-testid="drawerCommunity">
      <ListSubheader>
        <Typography variant="overline" className={classes.headers}>Community</Typography>
      </ListSubheader>
      <ListItemLink to="/about" primary="Learn about us" data-testid="LearnAboutUs"/>
    </List>
  );
}
