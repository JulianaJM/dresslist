import React from "react";
import styled from "@emotion/styled";
import ArticleForm from "../../Components/Article/ArticleForm";
import Title from "../../Components/common/Title/Title";
import { mq } from "../../utils/breakpoints";

const Container = styled("div")`
  ${mq({
    width: ["100%", "50%"],
    padding: ["30px 10px", "0"],
    margin: ["0", "0 auto"],
  })};
`;

const Dressing = () => {
  debugger;
  const handleSubmit = () => {
    debugger;
    console.log("sub");
  };
  return (
    <Container>
      <Title>Let's create an article</Title>

      <ArticleForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default Dressing;
