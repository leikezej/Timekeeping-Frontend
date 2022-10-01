import axios from "axios";
import { useState } from "react";

function ImageUpload() {
   const [ image, setImage ] = useState('');
   
   const handleChange = (e) => {
      console.log(e.target.files)
      setImage(e.target.files[0])
   }
   
   const handleApi = () => {
      // calling api
      const url = ''
      const formData = new FormData()
      
      axios.post('url, formData').then((res) => {
         console.log(res)
      })
   }
   
   return(
      <div>
         IMAGE UPLOAD
         <input type="file" onChange={handleChange} />
         <button onClick={handleApi}> Submit </button>
      </div>
   )
}

export default ImageUpload;