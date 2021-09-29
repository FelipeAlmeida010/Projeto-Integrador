import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import DataTable from "./DataTable"
import AddTransactionModal from "../AddTransaction/AddTransactionModal"
import AuthContext from '../../../Context/AuthContext';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    background: "#fff"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: "#242424",
  },
  
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DisplayTransactions() {
  const {userName} = useContext(AuthContext)

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggle = () => {
    setOpen(!open)
 }

  return (
    <>
      <a style={{cursor: 'pointer'}} onClick={handleClickOpen}>
        Trasações
      </a>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" style={{color: "#242424"}} onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Essas são as suas transações, {userName}
            </Typography>
            <Button  style={{color: "#242424"}}>

              <AddTransactionModal />
            
            </Button>
            <Button  style={{color: "#242424"}} onClick={handleClose}>
              Fechar
            </Button>
          </Toolbar>
        </AppBar>
        <DataTable toggle={toggle} open={open}/>
      </Dialog>
    </>
  );
}
