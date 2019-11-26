import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    textTransform: 'uppercase',

  },
  infoText: {
    margin: '50px',
    fontSize: '18pt',
    lineHeight: '1.6',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paper2: {
    position: 'absolute',
    left: 0,
    top: '20px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export const TransitionsModal = ({open, handleClose, children}) => {
  const classes = useStyles();
  const [slideId, setSlideId ] = React.useState(1);

const slides = (id) => {
  switch (id) {
    case 1:
      return (
        <div className={classes.paper}>
        <h2 className={classes.heading}>Why is this important?</h2>
        <p className={classes.infoText}>More than 15% of Visas from developing countries to UK are rejected
          1/3 of them are due to ‘wrongfully submitted applications</p>

          <Button variant="contained" color="primary" onClick={()=>setSlideId(2)}>Next</Button>
        </div>
      );
    case 2:
      return (
        <div className={classes.paper2}>
          <h2 id="transition-modal-title">Slide 2</h2>
          <p id="transition-modal-description">react-transition-group animates me.</p>
          <Button variant="contained" color="primary" onClick={handleClose}>Next</Button>
        </div>
      );
  }
}
  return (
    <div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>{slides(slideId)}
        </Fade>
      </Modal>
    </div>
  );
}
