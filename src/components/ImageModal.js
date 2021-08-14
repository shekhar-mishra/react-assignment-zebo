import { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { Context } from '../store/index.js'
function ImageModal() {
    const [state, dispatch] = useContext(Context)
    const { projectDetails, clickedImage, shouldModalOpen} = state || {}   
    const [isMenuListShow,setMenuListShow] = useState(false)
    const handleClose = () => {
        dispatch({
            type: "Set-Modal-False",
            payload: false
        })
        }
     let tileStyle = {
        width: '100%',
        height: '29vw'
    };  
    const onRightClick = (e, index) => {
        e.preventDefault()
        setMenuListShow(true)
        
    }
    const onListClick = (image) => {
       
        dispatch({
            type: "Set-Clicked-Image",
            payload: image
        })
        setMenuListShow(false)
       
    }

    return (
        <Modal show={shouldModalOpen} onHide={handleClose} >
             <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <img
                    src={clickedImage.url}
                    alt={"hh"}
                    style={tileStyle}
                    onContextMenu={(e) => onRightClick(e)}
                />
                <nav
                    
                    className={`menu ${isMenuListShow ? "active" : "inactive"}`}
                >
                    {projectDetails && projectDetails.map((project, projectsIndex) => {
                        return (
                            <ul key={projectsIndex}>
                                {project && project.images.map((image, imageIndex) => {
                                    return (
                                        <li key={imageIndex} onClick={() => onListClick(image)}>
                                            <a href="#">{image.file[0].name}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        )
                    })}

                </nav>
            </Modal.Body>
        </Modal>
    )
}

export default ImageModal;