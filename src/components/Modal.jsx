import PropTypes from "prop-types";

import Button from "./Button";

const Modal = ({ show, setShow, children }) => {
  return (
    <>
      {show && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center
                     justify-center bg-black/50 z-50 px-8"
        >
          <div className="flex flex-col gap-5 bg-white rounded-lg px-8 py-6 max-w-md">
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
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
