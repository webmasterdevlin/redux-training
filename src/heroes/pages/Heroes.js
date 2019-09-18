import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeroes, addHero, removeHero } from "../hero-actions";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    }
  })
);
export default function Heroes() {
  const classes = useStyles();
  /*part of Redux pattern*/
  const dispatch = useDispatch();
  const { heroes, isLoading } = useSelector(state => state.heroReducer);

  const [hero, setHero] = useState({});

  useEffect(() => {
    dispatch(fetchHeroes());
  }, []);

  const removeItem = id => {
    dispatch(removeHero(id));
  };

  const handleInputChange = ({ currentTarget: input }) => {
    const newHero = { ...hero };
    const { id, value } = input;
    newHero[id] = value;
    setHero(newHero);
  };

  const handleSubmit = e => {
    e.preventDefault(true);
    dispatch(addHero(hero));
  };

  return (
    <div style={{ width: "75vw", margin: "0 auto" }}>
      <h2>Heroes</h2>
      <form
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridRowGap: "1rem"
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={handleInputChange}
          id="firstName"
          label="First Name"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
        />
        <TextField
          onChange={handleInputChange}
          id="lastName"
          label="Last Name"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
        />
        <TextField
          onChange={handleInputChange}
          id="house"
          label="House"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
        />
        <TextField
          onChange={handleInputChange}
          id="knownAs"
          label="Known as"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
        />
        <Button
          style={{ width: "4rem" }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
      <ul>
        {isLoading ? (
          <h2>Loading..</h2>
        ) : (
          heroes.map(h => (
            <li key={h.id}>
              {h.firstName}
              <Button
                variant="contained"
                color="secondary"
                onClick={() => removeItem(h.id)}
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
