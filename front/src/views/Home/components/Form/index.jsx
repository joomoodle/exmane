import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from "react";

export default function FormDialog(props) {
  const [model, setModel] = useState({
    titulo: "",
    numero_volumen: "",
    estante: "",
    sala: "",
    librero: "",
    posicion: "",
  });

  const setFielDTO = (field, value) => {
    setModel({
      ...model,
      [field]: value,
    });
  };

  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agrega un nuevo libro</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Titulo"
            fullWidth
            onChange={(e, v) => {
              setFielDTO("titulo", e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Numero volumen"
            fullWidth
            onChange={(e, v) => {
              setFielDTO("numero_volumen", e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Estante"
            fullWidth
            onChange={(e, v) => {
              setFielDTO("estante", e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Sala"
            fullWidth
            onChange={(e, v) => {
              setFielDTO("sala", e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Librero"
            fullWidth
            onChange={(e, v) => {
              setFielDTO("librero", e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Posición"
            fullWidth
            onChange={(e, v) => {
              setFielDTO("posicion", e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            CANCELAR
          </Button>
          <Button
            onClick={() => {
              props.onSubmit(model);
            }}
            color="primary"
          >
            GIARDAR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
