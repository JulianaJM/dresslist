import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { css } from "@emotion/react";
import InputText from "../common/InputText/InputText";
import Button from "../common/Button/Button";
import FileUploader from "../common/FileUploader/FileUploader";
import Select from "../common/Select/Select";
import Checkbox from "../common/Checkbox/Checkbox";
import articleSchema from "./itemSchema";
import ErrorLabel from "../common/ErrorLabel/ErrorLabel";
import ButtonIcon from "../common/ButtonIcon/ButtonIcon";
import { mq } from "../../utils/breakpoints";

const Label = styled.p`
  color: #737373;
  font-weight: 100;
  font-size: 13px;
  margin: 10px 5px;
`;

const Preview = styled.img`
  display: block;
  ${mq({
    width: ["30%", "30%", "30%", "20%"],
  })}
  margin: 10px 5px;
`;

const Form = styled.form`
  input {
    margin-bottom: 10px;
  }
`;

const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PreviewContainer = styled.div`
  position: relative;

  button {
    position: absolute;
    ${mq({
      top: ["0px"],
      left: ["32%", "32%", "32%", "21%"],
    })}

    svg {
      color: darkgrey;
    }
  }
`;

const H4 = styled.h4`
  color: #737373;
  padding: 0 5px;
  font-size: 13px;
  font-weight: 100;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const submitBtn = css`
  ${mq({
    marginTop: ["80px", "50px"],
    marginBottom: ["0", "10px"],
    width: ["100%", "50%"],
  })}
`;

const ArticleForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      type: "",
      category: "",
      color: "",
      size: "",
      file: undefined,
      pantLength: "",
    },
    validationSchema: articleSchema,
    validateOnChange: false,
    onSubmit: values => {
      onSubmit(values);
    },
  });

  const [cardImage, setCardImage] = useState();

  const onClear = () => {
    setCardImage(undefined);
    formik.setFieldValue("file", undefined);
  };

  const setFile = blob => {
    setCardImage(URL.createObjectURL(blob));
    formik.setFieldValue("file", blob);
  };

  const onFileChange = e => {
    setFile(e.target.files[0]);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputText
        label="Color"
        type="text"
        id="color"
        name="color"
        value={formik.values.color}
        onChange={formik.handleChange}
        error={formik.errors.color}
        errorLabel={formik.errors.color}
      />

      <InputText
        label="Size"
        type="text"
        id="size"
        name="size"
        value={formik.values.size}
        onChange={formik.handleChange}
        error={formik.errors.size}
      />

      <Select
        id="category"
        name="category"
        label="Category"
        value={formik.values.category}
        options={[
          { value: "clothes", name: "clothes" },
          { value: "shoes", name: "shoes" },
          { value: "other", name: "other" },
        ]}
        onChange={formik.handleChange}
        error={formik.errors.category}
      />

      <Select
        id="type"
        name="type"
        label="Type"
        value={formik.values.type}
        options={[
          { value: "Tshirt", name: "Tshirt" },
          { value: "Skirt", name: "Skirt" },
          { value: "other", name: "other" },
        ]}
        onChange={formik.handleChange}
        error={formik.errors.type}
      />

      <InputText
        label="Pants lenght"
        type="text"
        id="pantLength"
        name="pantLength"
        value={formik.values.pantsLength}
        onChange={formik.handleChange}
        error={formik.errors.pantsLength}
      />

      <Checkbox id="pattern" name="pattern" label="Pattern" />

      {!cardImage && (
        <UploadWrapper>
          <Label>Upload file : </Label>
          <FileUploader onChange={onFileChange} />
        </UploadWrapper>
      )}
      {formik.errors.file && <ErrorLabel error={formik.errors.file} />}
      {cardImage && (
        <>
          <H4>Uploaded file</H4>
          <PreviewContainer>
            <Preview src={cardImage} />
            <ButtonIcon onClick={onClear}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </ButtonIcon>
          </PreviewContainer>
        </>
      )}

      <ButtonWrapper>
        <Button type="submit" primary customStyles={submitBtn}>
          create
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

ArticleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ArticleForm;
