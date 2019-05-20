import React, {useEffect,useRef, useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
export const DrapAndDrop = ({images, handleChangeUpload,handleRemoveImage, }) => {
    const [isDrop, setIsDrop] = useState(false);
    const dropRef = useRef(null);
    const divUploadRef = useRef(null);
    let dragCounter = 0;
    const handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        dragCounter++;
  
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setIsDrop(!isDrop);
        }
    }
    const handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
        dragCounter--;
        if (dragCounter > 0) return;
        setIsDrop(!isDrop);
    }
    const handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
 
    const handleClickUpload = (e) => {
        divUploadRef.current.click()
    }
 
    useEffect(() => {
        const eleDiv = dropRef.current;
        dragCounter = 0;
        eleDiv.addEventListener('dragenter', handleDragIn)
        eleDiv.addEventListener('drapleave', handleDragOut)
        eleDiv.addEventListener('dragover', handleDrag)
        eleDiv.addEventListener('drop', handleDrop)
        return () => {
            eleDiv.removeEventListener('dragenter', handleDragIn)
            eleDiv.removeEventListener('drapleave', handleDragOut)
            eleDiv.removeEventListener('dragover', handleDrag)
            eleDiv.removeEventListener('drop', handleDrop)
        }
    },[])

    
    return (
      <div>
        <div className="mb-4">
          <div className="btn btn-success" onClick={handleClickUpload}> add Files ...</div>
          <input type="file" style={{display:"none"}} ref={divUploadRef} onChange={handleChangeUpload} multiple/>
          <div className="btn btn-primary" > Upload </div>
        </div>
       
        <DrapAndDropWarpper ref={dropRef}>
     

     
              {images.map((element) => {
                 return <DrapAndDropContent style={{position: "relative"}}>
                      <ActionImg> 
                        
                          <img  style={{height:"100px", width:"100px"}} src={
                             element instanceof File ?   URL.createObjectURL(element) : `${process.env.REACT_APP_PUBLIC_URL}/images/w510/${element}` 
                          } />
                        </ActionImg>
                        <ActionRemoveContainer>
                            <ActionRemove  onClick={() => handleRemoveImage(element)}>
                              <FontAwesomeIcon icon={faTimes} color="#fff"  size="1x"  flip="both" />
                            </ActionRemove>
                        </ActionRemoveContainer>
                    
                  </DrapAndDropContent>
              })}
        
        </DrapAndDropWarpper>
        </div>
    )
}

const DrapAndDropWarpper = styled.div`
border: 2px dashed #00BCD4 !important;
position: relative;
background: white;
padding: 20px 20px;
display: flex;
flex-wrap: wrap;
`
const DrapAndDropContent = styled.div`
margin-right: 20px;
margin-bottom: 15px;
`
const ActionImg = styled.div`


`
const ActionRemoveContainer = styled.div`
position: absolute;
display: flex;
bottom: 16px;
left: 34px;
`
const ActionRemove = styled.span`
height: 32px;
width: 32px;
border-radius: 32px;
opacity: 1;
padding: 8px;
background-color: rgba(238,77,45,.87);
display: flex;
justify-content: center;
`