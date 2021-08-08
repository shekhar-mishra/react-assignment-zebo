import React, { Fragment } from 'react'
import FileUploader from './FileUploader'

function FormContainer() {
    return (
        <Fragment>
            <div className="container m-t-11 ">
                <div className="row">
                    <div className="col-md-12">
                        <FileUploader />
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="project-name" className="f-w-500 f-s-14">Project Name</label>
                            <input type="text" className="form-control" id="project-name" placeholder="Project name"/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="description" className="f-w-500 f-s-14">Project Description</label>
                            <textarea className="form-control" id="description" rows="3" placeholder="Project description"></textarea>
                        </div>
                    </div>
                    <div className="col-md-6 m-t-11">
                    <button type="submit" className="btn btn-primary bg-black">Submit</button>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default FormContainer;