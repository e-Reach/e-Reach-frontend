import cloudinary from 'cloudinary-core';

const cloudinaryConfig = {
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
};

const cl = new cloudinary.Cloudinary(cloudinaryConfig);