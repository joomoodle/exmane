export default theme => ({
  topbar: {
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    right: "auto",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  topbarShift: {
    marginLeft: 240,
    width: "calc(-240px + 100vw)"
  },
  drawerPaper: {
    zIndex: 1200,
    width: 240
  },
  sidebar: {
    width: 240
  },
  content: {
    marginTop: "64px",
    backgroundColor: theme.palette.background.edufarm,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: "100%"
  },
  contentShift: {
    marginLeft: 240
  }
});
