const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const User = mongoose.model(
    'users',
    {
        email: String,
        password: String,
        full_name: String,
        profile_img: String
    },
    'users'
);

const uploadProfileImage = async (user_id, imageFilePath) => {
    var id = new mongoose.Types.ObjectId(user_id);
    if (ObjectId.isValid(id)) {
        return User.updateOne({_id: user_id}, {profile_img: imageFilePath});
    }
    return null;
}

module.exports = {
    uploadProfileImage
};