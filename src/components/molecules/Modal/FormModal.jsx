import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
    fontSize: '14pt',
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


export const FormModal = ({open, handleClose, children}) => {
  const classes = useStyles();
  const [slideId, setSlideId] = React.useState(1);

  const slides = (id) => {
    switch (id) {
      case 1:
        return (
          <div className={classes.paper}>
            <h2 className={classes.heading}>Want to receive a personal consultation:</h2>
            <ul className={classes.infoText}>
              <li>90 USD (not 150 USD per application)
              </li>
              <li>Pay only if the application is successful</li>
            </ul>
            <p>We have special offers to the youth organisations!</p>
            <Button variant="contained" color="primary" onClick={handleClose}>Done</Button>
          </div>
        );
    }
  };
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
};
