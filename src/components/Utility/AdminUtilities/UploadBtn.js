import Image from 'next/image'
import React, {useRef} from 'react'

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
    <div>
        <input type='file' ref={fileInputRef} onChange={handleFileInputChange} accept='.png,.jpg,.jpeg' className='absolute left-[-9999999px]'/>
        <button onClick={handleButtonClick} className='w-full flex justify-center items-center border border-black rounded py-2'>
            <Image className='mr-4' width={20} height={20} alt='upload icon' src='/uploadIcon.png'/>
            <p className='text-sm sm:text-base'>{btnText}</p>
        </button>
    </div>
  )
}

export default uploadBtn