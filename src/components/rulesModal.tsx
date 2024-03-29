import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Game Rules</h2>
      <p id="simple-modal-description">
        You play the game by pressing the jump button.<br/>
        The goal of the game is to jump over as many obstacles as possible.
        You lose when an obstacle hit you.
        You will recieve points for every obstacle you clear.
        good luck!=)
      </p>
    </div>
  );

  return (
    <>
      <button className='jurassicFont' style={ styleModal } type="button" onClick={handleOpen}>
        Rules
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}

const styleModal: React.CSSProperties = {
  backgroundColor: 'white',
	borderRadius: '15px',
	border:'1px solid white',
	display:'inline-block',
	cursor: 'pointer',
  fontWeight: 1000,
	color:'rgb(37, 82, 43)',
	fontSize: '40px',
	textDecoration: 'none',
  margin: '5px',
}