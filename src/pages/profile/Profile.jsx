import edit from '../../assets/edit.svg'

import { useRef, useState } from 'react';

export default function Profile(){

    const inputRef = useRef(null);
    const [image, setImage] = useState("")

    const handleImageClick = () => { 
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        setImage(event.target.files[0]);
    }

    // const [firstName, setFirstName] = useState("Mary Ruth")
    // const [lastName, setLastName] = useState("Cabales")
    // const [userEmail, setUserEmail] = useState("mrcabales@nu-moa.edu.ph")
    // const [employeeNo, setEmployeeNo] = useState("2")
    // const [nuBranch, setNuBranch] = useState("NU MOA")
    // const [userPosition, setUserPosition] = useState("")

    // const [editing, isEditing] = useState(false)

    // const handleEditButton = () => {
    //     isEditing(true)
    // }

    // const handleSaveButton = () => {
    //     isEditing(false)
    // }

    return(

        <>  
            <h1>Profile Settings</h1>
            <div class="profile-picture-cont">
                {/* <img class="prof-pic" src={image} /> */}
                {image ? <img class="prof-pic" src={URL.createObjectURL(image)} alt=""/> : <img class="prof-pic" src="https://avatarfiles.alphacoders.com/375/375159.jpeg" alt="" />}
            </div>

            <div class="upload-btn-cont">

                <input 
                type='file' 
                ref={inputRef} 
                onChange={handleImageChange} 
                style={{display: "none"}}/>


                <button class="upload-btn" onClick={handleImageClick}>
                    Upload Photo
                </button>


                <label class="upload-btn-bottom-label">At least 256 x 256 px PNG or JPG file</label>
            </div>

            {/* <div class="name-cont">
                <h1 class="profile-name">{firstName} {lastName}</h1>
                <button><img class="edit-btn" src={edit} onClick={handleEditButton} /></button>
            </div>

            <div>
                <label>First Name</label>
                <textarea className="border-2"
                    type="text"
                    placeholder='First Name'
                    value={firstName}
                    readOnly={!editing}

                />
            </div>
            
            <div>
                <button className='border-2 cursor-pointer' onClick={handleSaveButton}>Save</button>
            </div> */}

        </>
    )
}