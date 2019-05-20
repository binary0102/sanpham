import styled from 'styled-components';
import React, { useEffect, Fragment,useCallback } from 'react';
import ReactDOM from "react-dom";
import { Tabs } from './Tabs'
export const ModalDashBroad = styled.div`
position: fixed;
z-index: 1072;
display: block;
opacity: 1;
top: 0;
right: 0;
left: 0;
right: 0;
background: rgba(0, 0, 0, 0.6);
width: 100%;
height: 100%;
`
export const ModalDiaLog = styled.div`
width: 500px;
@media (min-width: 576px){
  
    width: 880px !important;   
    width: auto;
    margin: 1.75rem auto;
}`
export const ModalContentInterface = styled.div`
display: flex;
`
export const ModalFooter = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
padding: 1rem;
border-top: 1px solid #dee2e6;
border-bottom-right-radius: .3rem;
border-bottom-left-radius: .3rem;
`
export const ModalContent = styled(ModalContentInterface)`
flex-direction: column;
width: 100%;
background-color: #fff;
background-clip: padding-box;
border: 1px solid rgba(0,0,0,.2);
border-radius: .3rem;
outline: 0;
`
export const HeaderModal = styled.div`
display: flex;
flex-dirction: row;
padding: 0.5rem;
align-items: flex-start;
border-bottom: 1px solid #e9ecef;
border-top-left-radius: .3rem;
border-top-right-radius: .3rem;
justify-content: space-between;
`
const ButtonClose = styled.div`
cursor: pointer;
padding: 0.5rem;
margin: -0.5rem -0.5rem -0.5rem auto;
background-color: transparent;
border: 0;
`

export const ModalCustom = ({ isShowing, header, setShow,Footer,content,product,onProductChange}) => {

    function escFunction(event) {
        if(event.keyCode === 27) {
            //Do whatever when esc is pressed
          
            setShow(false);
          }
    }
    useEffect(() => {
        window.addEventListener("keydown", escFunction);
  
        return () => { window.removeEventListener("keydown", escFunction);}
    },[])

    return (
        <Fragment >
            {isShowing ? <ModalDashBroad>
                <ModalDiaLog>
                    <ModalContent>
                        <HeaderModal > {header}
                            <ButtonClose onClick={() => { setShow(!isShowing) }}> X </ButtonClose>
                        </HeaderModal>
                        <Tabs>
                          
                            {content({product,onProductChange})}
                        </Tabs>
                        <ModalFooter>
                            <Footer setShow={setShow} product={product} />
                        </ModalFooter>
                    </ModalContent>
                </ModalDiaLog>
            </ModalDashBroad> : null}
        </Fragment>
    )
}
const Modal = (props) => {
    return ReactDOM.createPortal(<ModalCustom {...props} />, document.querySelector("#modal"));
}
export default Modal;