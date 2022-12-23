import React, { useEffect, useState } from 'react';

// let imageFile;
interface UploadImageProps {
    imageUrl?: string;
    name: string;
    onImageChange(imagefile: any): void;
}
export const UploadImage = (props: UploadImageProps) => {
    const defaultImage = '/assets/images/placeholder.png';
    const imageName = props.name || 'sfimage'
    const [imageData, setImageData] = useState();
    const [imagePreview, setImagePreview] = useState(defaultImage);

    useEffect(() => {
        if(props.onImageChange && imageData) {
            props.onImageChange(imageData);  
        }
    }, [imageData]);

    const onPhotoChange = (event: any) => {
        if (event?.target?.files[0]) {
            const imageFile = event.target.files[0];
            setImageData(imageFile);
            setImagePreview(URL.createObjectURL(imageFile));
        }
    }
    return(
        <div>
            <img className='p-bot-xm ' src={imagePreview} alt={imageName} style={{ width: '100%' }} />
            <input type="file" id={imageName} name={imageName}
                accept="image/*" onChange={onPhotoChange}></input>
        </div>
    )
}