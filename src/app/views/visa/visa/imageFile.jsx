import React, { useState } from 'react';
import {
    Typography, Box
} from "@mui/material";
import FileUploadIcon from '@mui/icons-material/FileUpload';
const frameStyle = {
    width: '100%',
    height: '250px',
    border: '2px dashed #1EB15A',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}
const ImageUpload = ({ id, onFileChange }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setSelectedImage(imageFile);

        if (imageFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result);
                onFileChange(imageFile);
            };
            reader.readAsDataURL(imageFile);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id={id}
            />
            <label htmlFor={id} style={{ cursor: 'pointer' }}> {/* Sử dụng id duy nhất */}
                <div>
                    {previewImage ? (
                        <img
                            src={previewImage}
                            alt="Preview"
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        />
                    ) : (
                        <Box sx={frameStyle}>
                            <FileUploadIcon sx={{ fontSize: 40, color: '#1EB15A' }} />
                            <Typography variant="h6" color="textSecondary">
                                Upload Photo
                            </Typography>
                        </Box>
                    )}
                </div>
            </label>
        </div>
    );
};

export default ImageUpload;