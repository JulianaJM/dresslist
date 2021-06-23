import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import ItemForm from "../../Components/Item/ItemForm";
import Title from "../../Components/common/Title/Title";
import { mq } from "../../utils/breakpoints";

const Container = styled("div")`
  ${mq({
    width: ["100%", "50%"],
    padding: ["30px 10px", "0"],
    margin: ["0", "0 auto"],
  })};
`;

const Dressing = ({ createItem, resetItem, isCreated }) => {
  const history = useHistory();
  const goToDressingList = () => {
    history.push("/dressinglist");
  };

  return (
    <Container>
      {!isCreated ? (
        <>
          <Title>Let's create an article</Title>

          <ItemForm onSubmit={createItem} />
        </>
      ) : (
        <>
          <button type="button" onClick={resetItem}>
            Create another ?
          </button>
          <button type="button" onClick={goToDressingList}>
            Go to dresslist
          </button>
        </>
      )}
    </Container>
  );
};

Dressing.propTypes = {
  createItem: PropTypes.func,
  resetItem: PropTypes.func,
  isCreated: PropTypes.bool,
};

export default Dressing;
