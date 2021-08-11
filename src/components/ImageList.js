import { Fragment, useContext, useEffect, useState, useRef } from 'react';
import zeboLogo from '../Assets/image/zebo.png'
import FormContainer from './FormContainer';
import { Context } from '../store/index.js'
import { useDetectOutsideClick } from "./useDetectOutsideClick";
function ImageList(props) {
    const [state, disptch] = useContext(Context)
    const { projectDetails } = state || {}
    console.log("===============", projectDetails)
    const [showImageForm, setShowImageForm] = useState(false)
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const [selectedIndex, setSelectedIndex] = useState(null)
    const onClick = () => setIsActive(!isActive);

    const _mouseEnter = (e) => {
        e.preventDefault();

    }
    const _mouseLeave = (e) => {

    }
    const _clickHandler = (e) => {
        console.log("eee", e)
    }
    let tileStyle = {
        width: '18vw',
        height: '18vw'
    };
    const goToAddImage = () => {
        setShowImageForm(true)
    }
    const onRightClick = (e, index) => {
        e.preventDefault()
        console.log("hello", e, index)
        setSelectedIndex(index)
        setIsActive(!isActive);
    }
    return (
        <Fragment>
            {showImageForm ? <FormContainer /> : <div>
                <div className="row">
                    <div className="col-md-6 m-t-11 t-a-r">
                        <button type="submit" className="btn btn-primary bg-black" onClick={goToAddImage}>Add Image</button>
                    </div>
                </div>
                <div className="container">
                    <div className="row d-flex flex-row py-5">

                        {projectDetails && projectDetails.map((project, index) => {
                            return (
                                <div>
                                    {project && project.images.map((image, index1) => {
                                        return (
                                            <div className="col-md-6 col-sm-12 tile" key={index1}>
                                                <img
                                                    onMouseEnter={_mouseEnter}
                                                    onMouseLeave={_mouseLeave}
                                                    onClick={_clickHandler}
                                                    src={image.url}
                                                    alt={"hh"}
                                                    style={tileStyle}
                                                    onContextMenu={(e) => onRightClick(e, index1)}
                                                />
                                                <nav
                                                    ref={dropdownRef}
                                                    className={`menu ${isActive && (selectedIndex === index1) ? "active" : "inactive"}`}
                                                >
                                                    {projectDetails && projectDetails.map((project, projectsIndex) => {
                                                        return (
                                                            <ul>
                                                                  {project && project.images.map((image, imageIndex) => {
                                                                      return (
                                                                        <li>
                                                                        <a href="#">{image.file[0].name}</a>
                                                                    </li>
                                                                      )
                                                                  })}
                                                               
                                                              
                                                            </ul>
                                                        )
                                                    })}

                                                </nav>
                                            </div>

                                        )
                                    })

                                    }
                                </div>

                            )
                        })}

                    </div>


                </div>

            </div>
            }

        </Fragment>
    )
}

export default ImageList;