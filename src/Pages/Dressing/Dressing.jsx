import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import ItemForm from "../../Components/Item/ItemForm";
import Title from "../../Components/common/Title/Title";
import { mq } from "../../utils/breakpoints";
import Modal from "../../Components/common/Modal/Modal";
import Button from "../../Components/common/Button/Button";

const Container = styled("div")`
  ${mq({
    width: ["100%", "50%"],
    padding: ["30px 10px", "0"],
    margin: ["0", "0 auto"],
  })};
`;

const button = css`
  margin: 8px auto;
`;

const Dressing = ({ createItem, resetItem, isCreated = false }) => {
  const history = useHistory();
  const goToDressingList = () => {
    history.push("/list");
  };

  return (
    <Container>
      <Title>Let's create an article</Title>
      <ItemForm onSubmit={createItem} />
      <Modal isOpen={isCreated} onClose={resetItem}>
        <Button type="button" onClick={resetItem} customStyles={button}>
          Create another ?
        </Button>
        <Button type="button" primary onClick={goToDressingList} customStyles={button}>
          Go to dresslist
        </Button>
      </Modal>
    </Container>
  );
};

Dressing.propTypes = {
  createItem: PropTypes.func,
  resetItem: PropTypes.func,
  isCreated: PropTypes.bool,
};

export default Dressing;
