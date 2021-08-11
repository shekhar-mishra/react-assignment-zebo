import React,{useCallback, useState,useEffect} from 'react';
import {useDropzone} from 'react-dropzone';

function FileUploader(props) {
  const[fileList,setFilelist]=useState([])
   const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
   noClick: true,
    noKeyboard: true,
    maxFiles:5,
    onDrop
  });

  useEffect(()=>{
    //call function when something change in state
    props.onFileChange(fileList);
  },[fileList]) //when file changed

  //  Calling onDrop function
  function onDrop (acceptedFiles) {
    console.log("accepted",acceptedFiles)
    setFilelist(prevState=>[...prevState,{url:window.URL.createObjectURL(...acceptedFiles),file:acceptedFiles}]      
      )  
  }
  
  const files = fileList.map((file,index) => (
    <div key={index}>
        {file.name}
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