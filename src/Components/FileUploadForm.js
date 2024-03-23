// FileUploadForm.js
import React from 'react';

const FileUploadForm = ({ handleFileSubmit }) => {
  const handleFile = (e) => {
    const selectedFile = e.target.files[0];
    handleFileSubmit(selectedFile);
  };

  return (
    <form className="form-group custom-form">
      <input type="file" className="form-control" required onChange={handleFile} />
      <br />
    </form>
  );
};

export default FileUploadForm;
