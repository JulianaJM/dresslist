import * as yup from "yup";

const FILE_SIZE = 40000000; // byte = 5mo
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const articleSchema = yup.object({
  type: yup.string("Enter article type").required("Enter article type"),
  category: yup.string("Enter article category").required("Enter article category"),
  file: yup
    .mixed()
    .required("A file is required")
    .test("fileSize", "File too large", value => value && value.size <= FILE_SIZE)
    .test(
      "fileFormat",
      "Unsupported Format",
      value => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  color: yup.string("Enter article color").required("Enter article color"),
});

export default articleSchema;
