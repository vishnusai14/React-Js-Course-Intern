import classes from "./Modal.module.css";
import ReactDom from "react-dom";
const BackDrop = (props) => {
  return <div onClick={props.closeModal} className={classes.backdrop}></div>;
};

const OverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop closeModal={props.closeModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDom.createPortal(
        <OverLay>{props.children}</OverLay>,
        document.getElementById("overlay")
      )}
    </>
  );
};
export default Modal;
