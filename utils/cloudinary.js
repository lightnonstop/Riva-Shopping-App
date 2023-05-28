const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "dmiatanit",
    api_key: "698936281964998",
    api_secret: "xvkkxepz8EI9JlDA4oIUon8YONY"
})

const cloudinaryUploadImage = async (fileToUpload) => {
    const res = await cloudinary.uploader.upload(fileToUpload);
    return {
        url: res.secure_url,
        asset_id: res.asset_id,
        public_id: res.public_id,
    };
}

const cloudinaryDeleteImage = async (fileToDelete) => {
    const res = await cloudinary.uploader.destroy(fileToDelete);
    return {
        url: res.secure_url,
        asset_id: res.asset_id,
        public_id: res.public_id,
    };
}

module.exports = {
    cloudinaryUploadImage,
    cloudinaryDeleteImage,
};