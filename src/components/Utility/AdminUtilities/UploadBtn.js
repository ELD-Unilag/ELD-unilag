import Image from 'next/image'
import globalStyles from '../../Admin/adminGlobalstyles.module.css'
import React, {useRef} from 'react'
import ResponsiveImage from '../ResponsiveImage'
import Upload from '../../../../public/images/admin/upload.svg'

const uploadBtn = ({btnText,}) => {

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
      // Trigger the click event on the file input when the button is clicked
      fileInputRef.current.click();
    };
  
    const handleFileInputChange = (event) => {
        // Handle the selected file here (event.target.files)
        const selectedFile = event.target.files[0];
        console.log('Selected File:', selectedFile);
    
        // You can perform further actions with the selected file here if needed
      };
  

  return (
    <div className='w-full border border-eldBlack rounded-md h-12 flex items-center justify-center' onClick={handleButtonClick}>
       <ResponsiveImage 
        src={Upload}
        style={globalStyles.uploadIcon}
       />
        <p className='text-base ml-2 font-inter'>{btnText}</p>
        <input type='file' ref={fileInputRef}  className='hidden' onChange={handleFileInputChange}/>
    </div>
  )
}

export default uploadBtn