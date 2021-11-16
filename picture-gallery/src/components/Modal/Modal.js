import React from "react";
import ModalCSS from './Modal.module.css';
import { useSpring, animated } from '@react-spring/web';

export const Modal = React.memo((props) => {
  const {
    showModal,
    setShowModal,
    showPictureUrl
  } = props;

  const animation = useSpring({
    config: {
      duration: 500,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `scale(1)` : `scale(0)`,
  })

  return (
    <>
      {showModal && (
        <div
          className={ModalCSS.modal}
          onClick={() => {
            setShowModal(prev => !prev)
          }}
        >
          <animated.div style={animation}>
            <img
              className={ModalCSS.modal__image}
              src={showPictureUrl}
              alt={showPictureUrl}
            />
          </animated.div>
        </div>
      )}
      
    </>
  )
});
