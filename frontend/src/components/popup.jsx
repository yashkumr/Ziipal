import React, { useRef } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const Popup=({popupHide})=>{
    const modalRef = useRef();

    const closePopup=(e)=>{
        if(modalRef.current === e.target){
            popupHide();
        }
    }
    return(
        <>

        <div ref={modalRef} onClick={closePopup} className="popup">
            <div className="popupcontainer">
                <div className="checked"><IoIosCheckmarkCircleOutline className="checkicon"/></div>
                <div className="popupText">
                    <h2 className="fw-bold">Thank You !</h2>
                    <p>Your Detail's has been Submitted Successfully. thanks !</p>
                    <button onClick={popupHide}>OK</button>

                </div>
            </div>
        </div>
        
        </>
    )
}

export default Popup;