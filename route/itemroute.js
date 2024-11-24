const express = require('express');
const validateitem = require('../middleware/validateitme');
const itemController = require('../controller/itemcontroller');
const router = express.Router();

router.post('/', validateitem, itemCOntroller.createItem);
router.get('/get', itemController.GetItems );
router.put('/:id', validateitem, itemController.updateItem);
router.delete('/:id', itemController.DeleteItem);

module.exports = router;