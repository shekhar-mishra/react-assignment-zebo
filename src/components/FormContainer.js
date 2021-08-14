import React, { Fragment, useState, useContext } from 'react'
import FileUploader from './FileUploader'
import ImageList from './ImageList'
import { Context } from '../store/index.js'

function FormContainer() {
    const [state,dispatch] = useContext(Context)
     const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [images, setProjectImage] = useState();

    const [isrenderImage, setImagerender] = useState(false)
    const saveFormData = (e) => {
        e.preventDefault()
        if(projectName!=="" && projectDescription!=="" && images.length>0){
            let newImage = {
                projectDetails: projectName,
                projectDescription: projectDescription,
                images: images
            }
            dispatch({
                type: "Add-Image",
                payload: newImage
            })
            setImagerender(true)
        }else{
            alert("Please Enter All Details and Upload Image ! ")
        }
        
    }

    const onFileChange = (files) => {
        setProjectImage(files)
    }
    
    return (
        <Fragment>
            <div className="container m-t-11 ">
                {!isrenderImage ?
                    <div className="row">
                        <div className="col-md-12">
                            <FileUploader onFileChange={onFileChange} />
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="project-name" className="f-w-500 f-s-14">Project Name</label>
                                <input type="text" className="form-control" name="projectName" id="project-name" placeholder="Project name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="description" className="f-w-500 f-s-14">Project Description</label>
                                <textarea className="form-control" id="description" name="projectDescription" rows="3" placeholder="Project description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="col-md-6 m-t-11">
                            <button type="submit" className="btn btn-primary bg-black" onClick={saveFormData}>Submit</button>
                        </div>

                    </div>
                    :
                    <ImageList />
                }

            </div>
        </Fragment>
    )
}

export default FormContainer;