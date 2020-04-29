export default theme => ({
  root: {},
  row: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing.unit
  },
  spacer: {
    flexGrow: 1
  },
  btn: {
    backgroundColor: theme.palette.btn_edufarm.primary,
    marginRight: 10,
    marginTop: 20,
    color: "#ffffff",
    "&:hover": {
      backgroundColor: theme.palette.btn_edufarm.primary,
      padding: 5
    }
  },

  deleteButton: {
    color: theme.palette.danger.main,
    marginRight: theme.spacing.unit
  },
  importButton: {
    marginRight: theme.spacing.unit
  },
  importIcon: {
    marginRight: theme.spacing.unit
  },
  exportButton: {
    marginRight: theme.spacing.unit
  },
  exportIcon: {
    marginRight: theme.spacing.unit
  },
  searchInput: {
    marginRight: theme.spacing.unit
  }
});
