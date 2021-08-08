import React from 'react';
import {useDropzone} from 'react-dropzone';

function FileUploader(props) {
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    maxFiles:5
  });

  const files = acceptedFiles.map((file,index) => (
    <div key={index}>
        {file.path} - {file.size} bytes
    </div>
    
  ));

  return (
    <div className="">
      <div {...getRootProps({className: 'dropzone border-dashed t-a-c'})}>
        <input {...getInputProps()} />
        <p>Drag / Drop </p>
        <p>or </p>
        <button type="button" onClick={open}>
         Browse
        </button>
      </div>
      <aside>
        {files && files.length>0 && 
        <h4>Uploaded Files</h4>
        }
       <div>{files}</div>
      </aside>
    </div>
  );
}

export default FileUploader