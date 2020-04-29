export default theme => ({
  root: {
    backgroundColor: "#14367e",
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "63px",
    flexShrink: 0
  },
  logoLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 0
  },
  logoImage: {
    cursor: "pointer",
    width: "80%"
  },
  logoDivider: {
    marginBottom: theme.spacing.unit * 2
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
    backgroundColor: "#ffffff",
    height: "65px"
  },
  avatar: {
    width: "100px",
    height: "100px"
  },
  nameText: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing.unit * 2
  },
  bioText: {},
  profileDivider: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  listSubheader: {
    color: theme.palette.text.secondary
  },
  listItem: {
    cursor: "pointer",
    "&:hover": {
      //backgroundColor: theme.palette.primary.light,
      // borderLeft: `4px solid ${theme.palette.primary.main}`,
      borderRadius: "4px",
      "& $listItemIcon": {
        color: "#ffffff",
        marginLeft: "-4px"
      },
      "& $listItemText": {
        color: "#ffffff"
      }
    },
    "& + &": {
      marginTop: theme.spacing.unit
    }
  },
  activeListItem: {
    //borderLeft: `4px solid ${theme.palette.primary.main}`,
    //borderRadius: "4px",
    //backgroundColor: theme.palette.primary.light,
    "& $listItemText": {
      color: "#fff"
    },
    "& $listItemIcon": {
      color: "#fff",
      marginLeft: "-4px"
    }
  },
  listItemIcon: {
    marginRight: 0,
    color: "#7e8cda",
    fontFamily: '"Poppins", sans-serif'
  },
  listItemText: {
    color: "#7e8cda",
    fontFamily: '"Poppins", sans-serif',
    fontSize: 14
  },
  listDivider: {
    marginTop: theme.spacing.unit * 2
  }
});
