import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import InputText from "../common/InputText/InputText";
import Button from "../common/Button/Button";
import FileUploader from "../common/FileUploader/FileUploader";
import Select from "../common/Select/Select";
import Checkbox from "../common/Checkbox/Checkbox";
import articleSchema from "./articleSchema";
import ErrorLabel from "../common/ErrorLabel/ErrorLabel";

const Label = styled.p`
  color: #737373;
  font-weight: 100;
  font-size: 13px;
  margin: 10px 5px;
`;

const Preview = styled.img`
  dispaly: block;
  width: 20%;
  margin: 0 auto;
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

const ArticleForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      type: "",
      category: "",
      color: "",
      size: "",
      file: undefined,
    },
    validationSchema: articleSchema,
    validateOnChange: false,
    onSubmit: values => {
      onSubmit({ ...values });
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
        id="pantsLength"
        name="pantsLength"
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
        <div>
          <h2>Preview</h2>
          <Preview src={cardImage} />
          <Button type="button" onClick={onClear}>
            Remove picture
          </Button>
        </div>
      )}

      <Button type="submit" primary>
        create
      </Button>
    </Form>
  );
};

ArticleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ArticleForm;
