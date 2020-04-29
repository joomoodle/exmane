import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

// Externals
import PropTypes from "prop-types";

// Material helpers
import {
  withStyles,
  Button,
  Typography,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { useSelector, useDispatch } from "react-redux";
import { saveBooks, getBooks } from "../../actions/user";
import { Form } from "./components";

// Component styles
import styles from "./styles";

// Form validation schema
import schema from "./schema";

const Home = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { books } = useSelector((state) => state.user);

  useEffect(() => {
    getBooks_();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const getBooks_ = async () => {
    await dispatch(getBooks());
  };
  const onSubmit = async (data) => {
    let result = await dispatch(saveBooks(data));
    setIsOpen(false);
    getBooks_();
  };

  const renderBook = () => {
    return books.map((item) => {
      return (
        <div
          style={{
            maxWidth: "33.3333%",
            textAlign: "center",
            justifyContent: "center !important",
            flex: " 0 0 29%",
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow: "rgb(167, 167, 167) 0px 5px 30px 0px",
            margin: 10,
          }}
        >
          <h3>Titulo : {item.titulo}</h3>
          <h3>Numero volumen: {item.numero_volumen}</h3>
          <h3>Estante: {item.estante}</h3>
          <h3>Librero: {item.librero}</h3>
          <h3>Posición: {item.posicion}</h3>
          <h3>Sala: {item.sala}</h3>
        </div>
      );
    });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          alignContent: "flex-end",
          marginTop: 20,
          width: "100%",
          flexDirection: "column",
        }}
      >
        <IconButton
          size="medium"
          color="primary"
          style={{ marginRight: 30 }}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <Add />
        </IconButton>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingTop: 30,
          margin: "0 auto",
        }}
      >
        {renderBook()}
      </div>
      <Form isOpen={isOpen} handleClose={handleClose} onSubmit={onSubmit} />
    </div>
  );
};

Home.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
