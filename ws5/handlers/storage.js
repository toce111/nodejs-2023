const strings = require('../pkg/strings');
const users = require('../pkg/users');

const upload = async (req, res) => {
    try {
        let fileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/pjeg', 'image/gif'];
        let maxFileSize = 5 * 1024 * 1024;
        if (!fileTypes.includes(req.files.slika.mimetype)) {
            return res.status(400).send('Bad request');
        }

        if(maxFileSize < req.files.slika.size) {
            return res.status(400).send('Bad request');
        }

        let newFileName = `${strings.random(20)}_${req.files.slika.name}`;
        let newFilePath = `${__dirname}/../uploads/${newFileName}`;
        await req.files.slika.mv(newFilePath);
        await users.uploadProfileImage(req.params.user_id, newFileName);
        res.status(201).send({filename: newFileName});
    }   catch (err) {
        console.log(err);
        return res.status(500).send('ISE');
    }
};

const download = async (req, res) => {
    try {
        let filePath = `${__dirname}/../uploads/${req.params.file}`;
        res.download(filePath, req.params.file.split('_')[1]);
    }   catch (err) {
        console.log(err);
        return res.status(500).send('ISE');
    }
};

module.exports = {
    upload,
    download
};