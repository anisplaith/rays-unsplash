const { Router } = require('express');

const PhotoController = require('../controllers/PhotoController');



const router = Router();

router.get('/photos', PhotoController.index);
router.post('/photo', PhotoController.create);
router.delete('/delete/:id', PhotoController.destroy);

module.exports = router;