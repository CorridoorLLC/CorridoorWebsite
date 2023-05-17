// components/ImageUpload.tsx
import React, { useState, ChangeEvent, MouseEvent } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../api/firebase';
const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    
    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
  
      uploadTask.on('state_changed',
        (snapshot) => {
          // Progress function
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setProgress(progress);
        }, 
        (error) => {
          // Error function
          console.log(error);
        }, 
        () => {
          // Complete function
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrl(downloadURL);
          });
        }
      );
    }
  };

  return (
    <div>
      <progress value={progress} max="100"/>
      <br/>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br/>
      <img src={url || "http://via.placeholder.com/300"} alt="Uploaded" width="300" height="200"/>
    </div>
  )
}

export default ImageUpload;
