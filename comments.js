// Create wev server
// import module
const express = require('express');
const app = express.Router();
const commentController = require('./controllers/commentController');

// handle request
router.get('/', commentController.comments_list);
router.get('/create', commentController.comments_create_get);
router.post('/create', commentController.comments_create_post);
router.get('/:id/delete', commentController.comments_delete_get);
router.post('/:id/delete', commentController.comments_delete_post);


//app.get('/', (req, res) => {
    res.send('Hello World');
    //});
    
//app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
//});
