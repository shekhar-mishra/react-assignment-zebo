import { Fragment, useContext,useState } from 'react';
import FormContainer from './FormContainer';
import { Context } from '../store/index.js'
import ImageModal from './ImageModal';
function ImageList() {
    const [state, dispatch] = useContext(Context)
    const { projectDetails ,shouldModalOpen} = state || {}
    const [showImageForm, setShowImageForm] = useState(false)
    const goToAddImage = () => {
        setShowImageForm(true)
    }
   
    const openModal =(image)=>{
        dispatch({
            type: "Set-Clicked-Image",
            payload: image
        })
     }
    return (
        <Fragment>
            {showImageForm ? <FormContainer /> : <div>
                <div className="row">
                    <div className="col-md-6 m-t-11 t-a-r">
                        <button type="submit" className="btn btn-primary bg-black" onClick={goToAddImage}>Add Image</button>
                    </div>
                </div>
                <div className="container m-t-30">
                    <div className="row">

                        {projectDetails && projectDetails.map((project, index) => {
                            return (
                                <div className= "row" key={index}>
                                    {project && project.images.map((image, index1) => {
                                        return (
                                            <div className="column" key={index1}>
                                                <img
                                            
                                                   src={image.url}
                                                    alt={"hh"}
                                                    className='image-size'
                                                    onClick={()=>openModal(image)}
                                                    
                                                />
                                               
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
           {shouldModalOpen &&
            <ImageModal  />
           }

        </Fragment>
    )
}

export default ImageList;