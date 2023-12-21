const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
const path = require("path");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/uploads' ) // Destination folder for uploads
    },
filename: function (req, file, cb) {
    file.originalname
    const uniquename= uuidv4(); // Generating a unique fi
    cb(null, uniquename+path.extname(file.originalname)); // Use the unique filename for the
    }
});

const upload = multer({ storage: storage});

module.exports = upload;