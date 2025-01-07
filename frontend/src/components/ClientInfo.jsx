import React from "react";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
const ClientInfo = ({ Backhandler, popupshow }) => {
    return (
        <>
            <div className="queryforminput">
                <div className="top">
                    <MdOutlineContactPhone className="fs-4" />
                    <p className="fs-4">Contact details</p>
                    <p onClick={Backhandler} className="back"><IoArrowBack className="fs-6 mb-1 text-danger" />Back</p>
                </div>
                <form onSubmit={popupshow}>
                    <div>
                        <label for="firstname">First name:</label>
                        <input type="text" id="firstname" placeholder="first name" required />
                    </div>

                    <div>
                        <label for="firstname">Last name:</label>
                        <input type="text" id="firstname" placeholder="last name" required />
                    </div>

                    <div>
                        <label for="mail">email:</label>
                        <input type="text" id="mail" placeholder="type youe email" required />
                    </div>

                    {/* <div>
                    <label for="alternativeemail">alternative email:</label>
                    <input type="text" id="alternativeemail" placeholder="alternative email" required />
                    </div> */}

                    <div>
                        <label for="mobileno">mobile no:</label>
                        <input type="number" id="mobileno" placeholder=" mobile no" required />
                    </div>

                    <div>
                        <label for="alternativemobno">alternative mob no:</label>
                        <input type="number" id="alternativeemobno" placeholder="alternative mob no" required />
                    </div>

                    <div>
                        <label for="card-details">card details (cvv mm/yyy):</label>
                        <input type="number" id="card-details" name="card-details" placeholder="cvv mm/yyy" pattern="^\d{3,4} \d{2}/\d{4}$" required />
                    </div>

                    <div className="textareas ">
                        <label htmlFor="address" className="form-label">address</label>
                        <textarea id="address" name="address" placeholder="type here your address" required />
                    </div>

                    <div className="">
                        <button type="submit" className="">Submit</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default ClientInfo;