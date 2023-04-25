const express = require('express')
const userController = require('../controllers/user-controller')
const uploadImage = require('../controllers/image-controller.js')
const upload = require('../utils/upload.js')
const authenticateToken = require('../controllers/jwt-controller');
const postController = require('../controllers/post-controller');


const router = express.Router();

router.post('/signup',userController.userSignUp);
router.post('/login',userController.userLogin);

router.post('/file/upload',upload.single('file') ,uploadImage);

router.post('/create', authenticateToken ,postController.createPost);

router.get('/posts',authenticateToken,postController.getAllPosts);

module.exports = router;