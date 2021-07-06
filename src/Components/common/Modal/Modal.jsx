import React, { useEffect } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import FocusTrap from "focus-trap-react";
import { mq } from "../../../utils/breakpoints";

const Container = styled("div")`
  @keyframes slideup {
    100% {
      top: 50%;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const ModalWraper = styled("div")`
  ${mq({
    animationName: ["slideup", "none"],
    animationDuration: ["0.3s"],
    animationFillMode: ["forwards"],
    animationTimingFunction: ["ease-out"],
    top: ["150vh", "50%"],
    width: ["90%", "35%"],
  })}
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 5px;
  z-index: 2;
  padding: 15px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const ModalClose = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background: none;
    border: none;
    align-self: start;
    font-size: 1.5rem;
    color: #969696;
    cursor: pointer;
    margin-bottom: 5px;
    outline: none;
    &:focus {
      outline: 1px dashed #c92c7f;
    }
    &:hover {
      color: #c92c7f;
    }
  }
`;

const Modal = ({ children, isOpen, onClose = () => {} }) => {
  const enableScroll = () => {
    // enable scroll
    const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
    document.body.style.overflow = null;
    document.body.style.position = "initial";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };

  const saveScrollY = () => {
    document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
  };

  const handleClose = () => {
    enableScroll();
    onClose();
  };

  const onClickOutside = event => {
    if (event.target.matches("#overlay")) {
      handleClose();
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", saveScrollY);
    document.addEventListener("click", onClickOutside);

    return () => {
      handleClose();
      document.removeEventListener("scroll", saveScrollY);
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      // disable scroll
      const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");

      document.body.style.overflow = "hidden";
      document.querySelector("html").scrollTop = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollY}`;
    }
  }, [isOpen]);

  return (
    isOpen && (
      <FocusTrap>
        <Container>
          <Overlay id="overlay" />
          <ModalWraper>
            <ModalClose>
              <button type="button" onClick={handleClose}>
                X
              </button>
            </ModalClose>
            {children}
          </ModalWraper>
        </Container>
      </FocusTrap>
    )
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Modal;
