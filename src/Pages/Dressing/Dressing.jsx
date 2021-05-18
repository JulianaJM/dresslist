import React from "react";
import ArticleForm from "../../Components/Article/ArticleForm";
import FileUploader from "../../Components/common/FileUploader/FileUploader";

const Dressing = () => {
  const handleSubmit = () => {
    debugger;
    console.log("sub");
  };
  return (
    <>
      <h2>Load Article</h2>

      <ArticleForm onSubmit={handleSubmit} />
    </>
  );
};

export default Dressing;
