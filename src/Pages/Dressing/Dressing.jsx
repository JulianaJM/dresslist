import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
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

const Dressing = ({ createItem }) => (
  <Container>
    <Title>Let's create an article</Title>

    <ItemForm onSubmit={createItem} />
  </Container>
);

Dressing.propTypes = {
  createItem: PropTypes.func,
};

export default Dressing;
