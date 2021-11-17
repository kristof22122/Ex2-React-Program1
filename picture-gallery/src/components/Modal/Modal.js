import React from "react";
import ModalCSS from './Modal.module.css';
import { useSpring, animated } from '@react-spring/web';

export const Modal = React.memo((props) => {
  const {
    showPictureUrl,
    setShowPictureUrl,
  } = props;

  const animation = useSpring({
    config: {
      duration: 500,
    },
    opacity: showPictureUrl ? 1 : 0,
    transform: showPictureUrl ? `scale(1)` : `scale(0)`,
  });

  return (
    showPictureUrl ? (
      <div
        className={ModalCSS.modal}
        onClick={() => {
          // setShowModal(prev => !prev)
          setShowPictureUrl(null)
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
    ) : null
  );
});
