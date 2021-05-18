import PropTypes from "prop-types";
import React from "react";

const FileUploader = ({ onChange }) => (
  // const [isModalOn, toggleIsModalOn] = useToggle();
  <>
    {/* <Button
        type="button"
        onClick={toggleIsModalOn}
        customStyles={css`
          border-radius: 15px;
          height: auto;
          padding: 5px;
          ${mq({
            width: ["50%", "50%", "35%", "35%"],
          })}
        `}
      >
        Upload picture
      </Button> */}

    <input type="file" name="file" onChange={onChange} />
  </>
);
FileUploader.propTypes = {
  onChange: PropTypes.bool,
};

export default FileUploader;
