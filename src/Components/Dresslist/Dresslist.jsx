import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { mq } from "../../utils/breakpoints";
import ButtonIcon from "../common/ButtonIcon/ButtonIcon";

const Container = styled("div")`
  display: flex;
  flex-direction: column;

  button {
    padding: 0 6px;
    margin: 6px;
  }
`;

const CardContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
  ${mq({
    flexDirection: ["column", "column", "row"],
    margin: ["6px"],
  })};
`;

const Card = styled("div")`
  ${mq({
    padding: ["0 6px"],
    margin: ["6px"],
  })};
  box-shadow: 2px 2px 6px 0px rgb(0 0 0 / 30%);
  border-radius: 7px;
  background: #fff;
  img {
    ${mq({
      padding: ["0 6px"],
      margin: ["6px"],
      height: ["100vmin", "auto"],
    })};
  }
  transition: margin 0.5s, transform 0.5s;

  &:hover {
    box-shadow: 0 8px 16px 0 #c92c7f;
    z-index: 1;
    ${mq({
      margin: ["6px 0", "30px"],
      transform: ["scale(1)", "scale(1.2)"],
    })};
  }
`;

const Desc = styled("div")`
  padding: 5px;
  text-align: center;
  height: 50px;
`;

const Dresslist = () => {
  const history = useHistory();
  const goToCreate = () => {
    history.push("/add");
  };
  return (
    <Container>
      <ButtonIcon onClick={goToCreate} title="create another item">
        <FontAwesomeIcon icon={faPlusCircle} />
      </ButtonIcon>
      <CardContainer>
        <Card>
          <img src="https://picsum.photos/200/300" alt="" />
          <Desc>Jupe rouge taille s</Desc>
          <ButtonIcon>
            <FontAwesomeIcon icon={faEdit} />
          </ButtonIcon>
        </Card>
        <Card>
          <img src="https://picsum.photos/200/300" alt="" />
          <Desc>T shirt jaune taille M</Desc>
          <ButtonIcon>
            <FontAwesomeIcon icon={faEdit} />
          </ButtonIcon>
        </Card>
        <Card>
          <img src="https://picsum.photos/200/300" alt="" />
          <Desc>Robe verte taille M</Desc>
          <ButtonIcon title="edit item">
            <FontAwesomeIcon icon={faEdit} />
          </ButtonIcon>
        </Card>
        <Card>
          <img src="https://picsum.photos/200/300" alt="" />
          <Desc>Jupe rouge taille s</Desc>
          <ButtonIcon>
            <FontAwesomeIcon icon={faEdit} />
          </ButtonIcon>
        </Card>
        <Card>
          <img src="https://picsum.photos/200/300" alt="" />
          <Desc>T shirt jaune taille M</Desc>
          <ButtonIcon>
            <FontAwesomeIcon icon={faEdit} />
          </ButtonIcon>
        </Card>
        <Card>
          <img src="https://picsum.photos/200/300" alt="" />
          <Desc>Robe verte taille M</Desc>
          <ButtonIcon title="edit item">
            <FontAwesomeIcon icon={faEdit} />
          </ButtonIcon>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Dresslist;
