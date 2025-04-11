import PropTypes from "prop-types";

import Button from "./Button";

const Modal = ({ show, setShow, message, children }) => {
  return (
    <>
      {show && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center
                     justify-center bg-black bg-opacity-50 z-50 px-8"
        >
          <div
            className="flex flex-col gap-5 bg-white rounded-lg p-6 max-w-md"
          >
            {message && message.split("\n").map((line, index) => (
              line.trim() ? <p key={index}>{line}</p> : null
            ))}
            {children}
            <Button
              type="button"
              onClick={() => setShow(false)}
              className="mt-4"
            >
              OKAY
            </Button>
          </div>
        </div>
      )}

    </>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  message: PropTypes.string,
  children: PropTypes.node,
}

export default Modal;
